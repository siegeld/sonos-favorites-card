import { html, LitElement, nothing } from "lit";
import { state } from "lit/decorators/state.js";
import { HomeAssistant } from "custom-card-helpers";
import { styles } from "./card.styles";
import { SonosFavoritesCardConfig, SonosFavorite } from "./types";

export class SonosFavoritesCard extends LitElement {
  @state() private _config!: SonosFavoritesCardConfig;
  @state() private _favorites: SonosFavorite[] | null = null;
  @state() private _error: string = "";

  private _hass!: HomeAssistant;
  private _fetching = false;
  private _fetchedEntity = "";

  static styles = styles;

  setConfig(config: SonosFavoritesCardConfig) {
    if (!config.entity) throw new Error("entity is required");
    this._config = config;
    this._favorites = null;
    this._fetchedEntity = "";
    this._error = "";
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;

    if (
      !this._fetching &&
      this._config.entity &&
      this._fetchedEntity !== this._config.entity
    ) {
      this._fetchFavorites();
    }
  }

  private async _fetchFavorites() {
    this._fetching = true;
    this._error = "";

    try {
      const top: any = await this._hass.connection.sendMessagePromise({
        type: "media_player/browse_media",
        entity_id: this._config.entity,
        media_content_type: "favorites",
        media_content_id: "",
      });

      const favorites: SonosFavorite[] = [];

      for (const child of top.children || []) {
        if (child.media_content_type === "favorites_folder") {
          const folder: any = await this._hass.connection.sendMessagePromise({
            type: "media_player/browse_media",
            entity_id: this._config.entity,
            media_content_type: child.media_content_type,
            media_content_id: child.media_content_id,
          });

          for (const item of folder.children || []) {
            if (item.title && item.media_content_id) {
              favorites.push({
                title: item.title,
                content_id: item.media_content_id,
                content_type: item.media_content_type,
                thumbnail: item.thumbnail,
              });
            }
          }
        }
      }

      favorites.sort((a, b) => a.title.localeCompare(b.title));
      this._favorites = favorites;
      this._fetchedEntity = this._config.entity;
    } catch (e: any) {
      this._error = e.message || "Failed to load favorites";
      this._favorites = [];
    } finally {
      this._fetching = false;
    }
  }

  private _playFavorite(fav: SonosFavorite) {
    this._hass.callService("media_player", "play_media", {
      entity_id: this._config.entity,
      media_content_type: "favorite_item_id",
      media_content_id: fav.content_id,
    });
  }

  private _getActiveTitle(): string {
    const stateObj = this._hass?.states[this._config.entity];
    return stateObj?.attributes?.media_title || "";
  }

  render() {
    if (this._error) {
      return html`
        <ha-card>
          <div class="card-header">
            ${this._config.name || "Sonos Favorites"}
          </div>
          <div class="card-content">
            <p class="error">${this._error}</p>
          </div>
        </ha-card>
      `;
    }

    if (!this._favorites) {
      return html`
        <ha-card>
          <div class="card-header">
            ${this._config.name || "Sonos Favorites"}
          </div>
          <div class="card-content">
            <p class="loading">Loading favorites...</p>
          </div>
        </ha-card>
      `;
    }

    const activeTitle = this._getActiveTitle();

    return html`
      <ha-card>
        <div class="card-header">
          ${this._config.name || "Sonos Favorites"}
        </div>
        <div class="card-content">
          ${this._favorites.length === 0
            ? html`<p class="loading">No favorites found</p>`
            : html`
                <div
                  class="button-grid"
                  style="${this._config.rows
                    ? `max-height: ${this._config.rows * 46}px`
                    : ""}"
                >
                  ${this._favorites.map(
                    (fav) => html`
                      <button
                        class="fav-button ${activeTitle === fav.title
                          ? "active"
                          : ""}"
                        @click="${() => this._playFavorite(fav)}"
                      >
                        ${fav.title}
                      </button>
                    `
                  )}
                </div>
              `}
        </div>
      </ha-card>
    `;
  }

  static getConfigElement() {
    return document.createElement("sonos-favorites-card-editor");
  }

  static getStubConfig() {
    return {
      name: "Sonos Favorites",
      entity: "",
    };
  }

  getCardSize() {
    return 3;
  }
}
