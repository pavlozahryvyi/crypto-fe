import { axiosCoingeckoInstance } from "../axios-configuration/instance";
import { getQueryParams } from "../utils";
import type {
  CoinListResponseType,
  CoinsListApiQueryType,
} from "./coingecko-coins.models";

export const coingeckoApi = {
  URL: "/coins/markets",

  coinList: async (
    payload: CoinsListApiQueryType
  ): Promise<CoinListResponseType> => {
    try {
      const response = await axiosCoingeckoInstance.get<CoinListResponseType>(
        `${coingeckoApi.URL}?${getQueryParams({ vs_currency: payload.currency, names: payload.names })}`
      );

      return response.data;
    } catch (error) {
      console.log("----SOME ERROR");
      throw error;
    }
  },
};
