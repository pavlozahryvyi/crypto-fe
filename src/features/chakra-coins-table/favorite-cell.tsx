import type { CoinEntity } from "@/api/congecko-coins/coingecko-coins.models";
import {
  useAddFavoriteCoinMutation,
  useRemoveFavoriteCoinMutation,
  useWatchListFavoritesQuery,
} from "@/api/watch-list/watch-list.queries";
import { IconButton } from "@chakra-ui/react";
import type { FC } from "react";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";

type FavoriteCallProps = {
  coin: CoinEntity;
};

export const FavoriteCell: FC<FavoriteCallProps> = ({ coin }) => {
  const { data: favoriteCoins } = useWatchListFavoritesQuery();

  const { mutate: addToFavorite } = useAddFavoriteCoinMutation();

  const { mutate: removeFromFavorite } = useRemoveFavoriteCoinMutation();

  const isFavorite = favoriteCoins
    ?.map((coin) => coin.assetId)
    .includes(coin.name);

  const handleClick = () => {
    if (!isFavorite) {
      addToFavorite({ assetId: coin.name, name: coin.name });
      return;
    }

    const removedId = favoriteCoins?.find(
      (favoriteCoin) => favoriteCoin.assetId === coin.name
    );

    if (removedId) removeFromFavorite(removedId.id);
  };

  return (
    <IconButton variant="outline" size="sm" onClick={handleClick}>
      {isFavorite ? <MdOutlineRemove /> : <MdOutlineAdd />}
    </IconButton>
  );
};
