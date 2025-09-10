import { useGetCoinsListQuery } from "@/api/congecko-coins/coingecko-coins.queries";
import { Avatar, Stack, Table } from "@chakra-ui/react";
import type { FC } from "react";
import { FavoriteCell } from "./favorite-cell";

export const ChakraCoinsTable: FC = () => {
  const { data } = useGetCoinsListQuery();

  if (!data) return null;

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
            <Table.ColumnHeader textAlign="center">Favorite</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((coin) => (
            <Table.Row key={coin.id}>
              <Table.Cell>
                <Avatar.Root>
                  <Avatar.Fallback name={coin.name} />
                  <Avatar.Image src={coin.image} />
                </Avatar.Root>
              </Table.Cell>
              <Table.Cell>{coin.name}</Table.Cell>
              <Table.Cell textAlign="end">$ {coin.current_price}</Table.Cell>
              <Table.Cell textAlign="center">
                <FavoriteCell />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
};
