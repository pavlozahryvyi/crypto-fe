import { ACCESS_TOKEN_KEY } from "@/constants";
import { Home } from "@/pages/home";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(private)/")({
  beforeLoad: () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!token) {
      throw redirect({
        to: "/signin",
      });
    }
  },
  component: Home,
});
