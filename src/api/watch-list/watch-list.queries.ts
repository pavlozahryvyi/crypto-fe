import {
  type UseMutationOptions,
  type UseMutationResult,
  type UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { WatchListApi } from "./watch-list.api";
import type {
  AddWatchListFavoritesItemRequest,
  WatchListEntity,
  WatchListFavoritesResponse,
} from "./watch-list.model";

type UseGetWatchListFavoritesQueryResultType = UseQueryResult<
  WatchListFavoritesResponse,
  Error
>;

export const useWatchListFavoritesQuery =
  (): UseGetWatchListFavoritesQueryResultType =>
    useQuery({
      queryKey: ["watch-list-favorites"],
      queryFn: () => WatchListApi.favorites(),
    });

type UseAddFavoriteCoinMutationResultType = UseMutationResult<
  WatchListEntity,
  unknown,
  AddWatchListFavoritesItemRequest
>;

type UseAddFavoriteCoinMutationOptionsType = UseMutationOptions<
  WatchListEntity,
  unknown,
  AddWatchListFavoritesItemRequest
>;

export const useAddFavoriteCoinMutation = (
  options: UseAddFavoriteCoinMutationOptionsType = {}
): UseAddFavoriteCoinMutationResultType =>
  useMutation({ mutationFn: WatchListApi.addFavorite, ...options });

type UseRemoveFavoriteCoinMutationResultType = UseMutationResult<
  void,
  unknown,
  number
>;

type UseRemoveFavoriteCoinMutationOptionsType = UseMutationOptions<
  void,
  unknown,
  number
>;

export const useRemoveFavoriteCoinMutation = (
  options: UseRemoveFavoriteCoinMutationOptionsType = {}
): UseRemoveFavoriteCoinMutationResultType =>
  useMutation({ mutationFn: WatchListApi.removeFavorite, ...options });
