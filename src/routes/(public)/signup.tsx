import { createFileRoute } from "@tanstack/react-router";
import { SignUp } from "@/features/sign-up/sign-up";

export const Route = createFileRoute("/(public)/signup")({
  component: SignUp,
});
