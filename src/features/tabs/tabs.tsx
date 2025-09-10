import { Tabs } from "@chakra-ui/react";
import type { FC } from "react";
import { MdList, MdFavoriteBorder } from "react-icons/md";
import { ChakraCoinsTable } from "../chakra-coins-table/chakra-coins-table";
import { ChakraFavoriteCoinsTable } from "../chakra-coins-table/chakra-favotites-coins-table";

export const ChakraTabs: FC = () => {
  return (
    <Tabs.Root lazyMount defaultValue="list">
      <Tabs.List>
        <Tabs.Trigger value="list">
          <MdList />
          List
        </Tabs.Trigger>
        <Tabs.Trigger value="favorite">
          <MdFavoriteBorder />
          Favorites
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content value="list">
        <ChakraCoinsTable />
      </Tabs.Content>
      <Tabs.Content value="favorite">
        <ChakraFavoriteCoinsTable />
      </Tabs.Content>
    </Tabs.Root>
  );
};
