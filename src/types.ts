import { LovelaceCardConfig } from "custom-card-helpers";

export interface SonosFavoritesCardConfig extends LovelaceCardConfig {
  name?: string;
  entity?: string;
  pool_entity?: string;
  pool_zone?: string;
  rows?: number;
}

export interface SonosFavorite {
  title: string;
  content_id: string;
  content_type: string;
  thumbnail?: string;
}
