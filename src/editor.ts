import { html, LitElement } from "lit";
import { state } from "lit/decorators/state.js";
import { HomeAssistant } from "custom-card-helpers";
import { SonosFavoritesCardConfig } from "./types";
import { editorStyles } from "./editor.styles";

export class SonosFavoritesCardEditor extends LitElement {
  @state() _config!: SonosFavoritesCardConfig;
  @state() _hass!: HomeAssistant;
  @state() _mediaPlayers: { id: string; name: string }[] = [];

  static styles = editorStyles;

  setConfig(config: SonosFavoritesCardConfig) {
    this._config = config;
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this._discoverPlayers();
  }

  private _discoverPlayers() {
    const entities = (this._hass as any).entities || {};
    const players: { id: string; name: string }[] = [];
    for (const [eid, entry] of Object.entries(entities) as [string, any][]) {
      if (eid.startsWith("media_player.") && entry.platform === "sonos") {
        const stateObj = this._hass.states[eid];
        players.push({
          id: eid,
          name:
            stateObj?.attributes?.friendly_name ||
            eid.replace("media_player.", ""),
        });
      }
    }
    players.sort((a, b) => a.name.localeCompare(b.name));
    this._mediaPlayers = players;
  }

  render() {
    return html`
      <div class="form">
        <div class="row">
          <label>Name</label>
          <input
            .value="${this._config.name || ""}"
            @input="${(e: Event) =>
              this._valueChanged(
                "name",
                (e.target as HTMLInputElement).value
              )}"
            placeholder="Sonos Favorites"
          />
        </div>
        <div class="row">
          <label>Entity</label>
          <select
            @change="${(e: Event) =>
              this._valueChanged(
                "entity",
                (e.target as HTMLSelectElement).value
              )}"
          >
            <option value="" ?selected="${!this._config.entity}">
              Select a media player...
            </option>
            ${this._mediaPlayers.map(
              (p) => html`
                <option
                  value="${p.id}"
                  ?selected="${this._config.entity === p.id}"
                >
                  ${p.name}
                </option>
              `
            )}
          </select>
        </div>
      </div>
    `;
  }

  private _valueChanged(key: string, value: string) {
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: { ...this._config, [key]: value } },
        bubbles: true,
        composed: true,
      })
    );
  }
}
