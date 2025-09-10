import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { coingeckoApi } from "./coingecko-coins.api";
import type {
  CoinListResponseType,
  CoinsListQueryType,
} from "./coingecko-coins.models";

type UseGetCoinsListQueryResultType = UseQueryResult<
  CoinListResponseType,
  Error
>;

export const useGetCoinsListQuery = (
  payload: CoinsListQueryType = {},
  enabled = true
): UseGetCoinsListQueryResultType => {
  const apiPayload = { ...payload, currency: payload.currency || "usd" };

  return useQuery({
    queryKey: ["coins-list", apiPayload],
    queryFn: () => coingeckoApi.coinList(apiPayload),
    enabled,
  });
};
