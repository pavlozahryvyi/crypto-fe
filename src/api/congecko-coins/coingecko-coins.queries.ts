import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { coingeckoApi } from "./coingecko-coins.api";
import type { CoinListResponseType } from "./coingecko-coins.models";

type UseGetCoinsListQueryResultType = UseQueryResult<
  CoinListResponseType,
  Error
>;

export const useGetCoinsListQuery = (
  currency: string = "usd"
): UseGetCoinsListQueryResultType =>
  useQuery({
    queryKey: ["coins-list", currency],
    queryFn: () => coingeckoApi.coinList(currency),
  });
