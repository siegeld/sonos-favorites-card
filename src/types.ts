import { LovelaceCardConfig } from "custom-card-helpers";

export interface SonosFavoritesCardConfig extends LovelaceCardConfig {
  name?: string;
  entity: string;
}

export interface SonosFavorite {
  title: string;
  content_id: string;
  content_type: string;
  thumbnail?: string;
}
