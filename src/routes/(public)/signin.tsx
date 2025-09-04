import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "@/features/sign-in/sign-in";

export const Route = createFileRoute("/(public)/signin")({
  component: SignIn,
});
