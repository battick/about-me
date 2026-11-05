import { publicAsset } from "./content";
export const assetUrl = (path: string) =>
  publicAsset(path, import.meta.env.BASE_URL);
