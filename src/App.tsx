import { type FC } from "react";
import { Button, HStack } from "@chakra-ui/react";

export const App: FC = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
};
