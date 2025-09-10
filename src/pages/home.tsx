import { useWatchListFavoritesQuery } from "@/api/watch-list/watch-list.queries";
import { ChakraTabs } from "@/features/tabs/tabs";
import type { FC } from "react";

export const Home: FC = () => {
  useWatchListFavoritesQuery();

  return <ChakraTabs />;
};
