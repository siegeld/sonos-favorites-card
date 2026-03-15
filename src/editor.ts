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

  private get _mode(): "direct" | "pool" {
    return this._config.pool_entity ? "pool" : "direct";
  }

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
          <label>Mode</label>
          <select
            @change="${(e: Event) =>
              this._modeChanged((e.target as HTMLSelectElement).value as "direct" | "pool")}"
          >
            <option value="direct" ?selected="${this._mode === "direct"}">
              Direct Entity
            </option>
            <option value="pool" ?selected="${this._mode === "pool"}">
              Sonos Pool
            </option>
          </select>
        </div>
        ${this._mode === "direct"
          ? html`
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
            `
          : html`
              <div class="row">
                <label>Pool Entity</label>
                <input
                  .value="${this._config.pool_entity || ""}"
                  @input="${(e: Event) =>
                    this._valueChanged(
                      "pool_entity",
                      (e.target as HTMLInputElement).value
                    )}"
                  placeholder="sensor.sonos_pool_dante_pool"
                />
              </div>
              <div class="row">
                <label>Pool Zone</label>
                <input
                  .value="${this._config.pool_zone || ""}"
                  @input="${(e: Event) =>
                    this._valueChanged(
                      "pool_zone",
                      (e.target as HTMLInputElement).value
                    )}"
                  placeholder="lounge"
                />
              </div>
            `}
        <div class="row">
          <label>Visible Rows</label>
          <input
            type="number"
            min="1"
            .value="${String(this._config.rows || "")}"
            @input="${(e: Event) => {
              const val = (e.target as HTMLInputElement).value;
              this._valueChanged("rows", val ? Number(val) : undefined as any);
            }}"
            placeholder="All (no limit)"
          />
        </div>
      </div>
    `;
  }

  private _modeChanged(mode: "direct" | "pool") {
    const config = { ...this._config };
    if (mode === "direct") {
      delete (config as any).pool_entity;
      delete (config as any).pool_zone;
    } else {
      delete (config as any).entity;
    }
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _valueChanged(key: string, value: any) {
    const config = { ...this._config };
    if (value === undefined || value === "") {
      delete (config as any)[key];
    } else {
      (config as any)[key] = value;
    }
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }
}
