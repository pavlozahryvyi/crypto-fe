import {
  useMutation,
  type UseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import {
  type SignInRequestType,
  type SignInResponseType,
  type SignUpRequestType,
  type SignUpResponseType,
} from "./auth.models";
import { authApi } from "./auth.api";

type UseSignInMutationResultType = UseMutationResult<
  SignInResponseType,
  unknown,
  SignInRequestType
>;

type UseSignInMutationOptionsType = UseMutationOptions<
  SignInResponseType,
  unknown,
  SignInRequestType
>;

export const useSignInMutation = (
  options: UseSignInMutationOptionsType = {}
): UseSignInMutationResultType =>
  useMutation({ mutationFn: authApi.signIn, ...options });

type UseSignUpMutationResultType = UseMutationResult<
  SignUpResponseType,
  unknown,
  SignUpRequestType
>;

type UseSignUpMutationOptionsType = UseMutationOptions<
  SignUpResponseType,
  unknown,
  SignUpRequestType
>;

export const useSignUpMutation = (
  options: UseSignUpMutationOptionsType = {}
): UseSignUpMutationResultType =>
  useMutation({ mutationFn: authApi.signUp, ...options });
