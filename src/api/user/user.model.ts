import { WatchListEntity } from '../watch-list/watch-list.mdel';

export type UserEntity = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchList: Array<WatchListEntity>;
};
