import { html, LitElement, nothing } from "lit";
import { state } from "lit/decorators/state.js";
import { HomeAssistant } from "custom-card-helpers";
import { styles } from "./card.styles";
import { SonosFavoritesCardConfig, SonosFavorite } from "./types";

export class SonosFavoritesCard extends LitElement {
  @state() private _config!: SonosFavoritesCardConfig;
  @state() private _favorites: SonosFavorite[] | null = null;
  @state() private _error: string = "";
  @state() private _resolvedEntity: string = "";

  private _hass!: HomeAssistant;
  private _fetching = false;
  private _fetchedEntity = "";

  static styles = styles;

  private get _isPoolMode(): boolean {
    return !!(this._config.pool_entity && this._config.pool_zone);
  }

  setConfig(config: SonosFavoritesCardConfig) {
    if (!config.entity && !(config.pool_entity && config.pool_zone)) {
      throw new Error("entity or pool_entity + pool_zone is required");
    }
    this._config = config;
    this._favorites = null;
    this._fetchedEntity = "";
    this._resolvedEntity = config.entity || "";
    this._error = "";
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;

    if (this._isPoolMode) {
      const poolState = hass.states[this._config.pool_entity!];
      const assignments = poolState?.attributes?.assignments as
        | Record<string, string>
        | undefined;
      const assigned = assignments?.[this._config.pool_zone!] || "";
      if (assigned !== this._resolvedEntity) {
        this._resolvedEntity = assigned;
        this._fetchedEntity = "";
        this._favorites = null;
        this._error = "";
      }
    }

    if (
      !this._fetching &&
      this._resolvedEntity &&
      this._fetchedEntity !== this._resolvedEntity
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
        entity_id: this._resolvedEntity,
        media_content_type: "favorites",
        media_content_id: "",
      });

      const favorites: SonosFavorite[] = [];

      for (const child of top.children || []) {
        if (child.media_content_type === "favorites_folder") {
          const folder: any = await this._hass.connection.sendMessagePromise({
            type: "media_player/browse_media",
            entity_id: this._resolvedEntity,
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
      this._fetchedEntity = this._resolvedEntity;
    } catch (e: any) {
      this._error = e.message || "Failed to load favorites";
      this._favorites = [];
    } finally {
      this._fetching = false;
    }
  }

  private _playFavorite(fav: SonosFavorite) {
    this._hass.callService("media_player", "play_media", {
      entity_id: this._resolvedEntity,
      media_content_type: "favorite_item_id",
      media_content_id: fav.content_id,
    });
  }

  private _getActiveTitle(): string {
    const stateObj = this._hass?.states[this._resolvedEntity];
    return stateObj?.attributes?.media_title || "";
  }

  private get _playerName(): string {
    const stateObj = this._hass?.states[this._resolvedEntity];
    return stateObj?.attributes?.friendly_name || this._resolvedEntity || "";
  }

  render() {
    const title = this._config.name || "Sonos Favorites";

    if (this._isPoolMode && !this._resolvedEntity) {
      return html`
        <ha-card class="compact">
          <div class="no-speaker">
            <span class="header-title">${title}</span>
            <span class="header-player">No speaker assigned</span>
          </div>
        </ha-card>
      `;
    }

    const playerName = this._playerName;

    if (this._error) {
      return html`
        <ha-card>
          <div class="card-header">
            <span class="header-title">${title}</span>
            <span class="header-player">${playerName}</span>
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
            <span class="header-title">${title}</span>
            <span class="header-player">${playerName}</span>
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
          <span class="header-title">${title}</span>
          <span class="header-player">${playerName}</span>
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
