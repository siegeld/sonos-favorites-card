import { SonosFavoritesCard } from "./card";
import { SonosFavoritesCardEditor } from "./editor";

customElements.define("sonos-favorites-card", SonosFavoritesCard);
customElements.define("sonos-favorites-card-editor", SonosFavoritesCardEditor);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "sonos-favorites-card",
  name: "Sonos Favorites",
  description: "Play Sonos favorites with one tap",
});
