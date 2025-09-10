export type WatchListEntity = {
  id: number;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number;
};

export type WatchListFavoritesResponse = Array<WatchListEntity>;

export type AddWatchListFavoritesItemRequest = Pick<
  WatchListEntity,
  "assetId" | "name"
>;
