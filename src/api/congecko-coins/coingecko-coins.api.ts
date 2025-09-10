import { axiosCoingeckoInstance } from "../axios-configuration/instance";
import type { CoinListResponseType } from "./coingecko-coins.models";

export const coingeckoApi = {
  URL: "/coins/markets",

  coinList: async (currency: string = "usd"): Promise<CoinListResponseType> => {
    try {
      const response = await axiosCoingeckoInstance.get<CoinListResponseType>(
        `${coingeckoApi.URL}?vs_currency=${currency}`
      );

      return response.data;
    } catch (error) {
      console.log("----SOME ERROR");
      throw error;
    }
  },
};
