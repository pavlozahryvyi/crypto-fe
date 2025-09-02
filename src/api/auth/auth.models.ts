import type { UserEntity } from "../user/user.model";

export type SignInRequestType = {
  email: string;
  password: string;
};

export type SignInResponseType = {
  user: UserEntity;
  token: string;
};

export type SignUpRequestType = {
  name: string;
  email: string;
  password: string;
};

export type SignUpResponseType = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};
