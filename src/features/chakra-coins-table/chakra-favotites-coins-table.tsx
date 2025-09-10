import { useGetCoinsListQuery } from "@/api/congecko-coins/coingecko-coins.queries";
import { useWatchListFavoritesQuery } from "@/api/watch-list/watch-list.queries";
import { Avatar, Stack, Table } from "@chakra-ui/react";
import type { FC } from "react";

export const ChakraFavoriteCoinsTable: FC = () => {
  const { data: favoriteCoins, isSuccess } = useWatchListFavoritesQuery();

  const { data: coinsList } = useGetCoinsListQuery(
    {
      names: [...new Set(favoriteCoins?.map((coin) => coin.assetId))].join(","),
    },
    isSuccess && favoriteCoins.length > 0
  );

  if (!favoriteCoins || !coinsList) return null;

  return (
    <Stack gap="10">
      <Table.Root key="md" size="md" stickyHeader>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Crypto</Table.ColumnHeader>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">
              Current Price, ($)
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {coinsList.map((coin) => (
            <Table.Row key={coin.id}>
              <Table.Cell>
                <Avatar.Root>
                  <Avatar.Fallback name={coin.name} />
                  <Avatar.Image src={coin.image} />
                </Avatar.Root>
              </Table.Cell>
              <Table.Cell>{coin.name}</Table.Cell>
              <Table.Cell textAlign="end">$ {coin.current_price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
};
