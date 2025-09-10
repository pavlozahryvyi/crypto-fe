import { IconButton } from "@chakra-ui/react";
import type { FC } from "react";
import { MdOutlineAdd } from "react-icons/md";

export const FavoriteCell: FC = () => {
  // const { mutate: signIn } = useSignInMutation({
  //     onSuccess: (data: SignInResponseType) => {
  //       localStorage.setItem(ACCESS_TOKEN_KEY, data.token);

  //       navigate({ to: "/" });
  //     },
  //   });

  const handleClick = () => {};

  return (
    <IconButton variant="outline" size="sm" onClick={handleClick}>
      <MdOutlineAdd />
    </IconButton>
  );
};
