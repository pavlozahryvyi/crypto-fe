import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "@/features/sign-in/sign-in";

export const Route = createFileRoute("/signin")({
  component: SignIn,
});
