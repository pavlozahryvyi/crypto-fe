import { axiosPrivateInstance } from "../axios-configuration/instance";
import type {
  AddWatchListFavoritesItemRequest,
  WatchListEntity,
  WatchListFavoritesResponse,
} from "./watch-list.model";

export const WatchListApi = {
  URL: "/watch-list",

  favorites: async (): Promise<WatchListFavoritesResponse> => {
    try {
      const response =
        await axiosPrivateInstance.get<WatchListFavoritesResponse>(
          `${WatchListApi.URL}/favorites`
        );

      return response.data;
    } catch (error) {
      console.log("----SOME ERROR");
      throw error;
    }
  },

  addFavorite: async (
    payload: AddWatchListFavoritesItemRequest
  ): Promise<WatchListEntity> => {
    try {
      const response = await axiosPrivateInstance.post<WatchListEntity>(
        WatchListApi.URL,
        payload
      );

      return response.data;
    } catch (error) {
      console.log("----SOME ERROR");
      throw error;
    }
  },
};
