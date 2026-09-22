import { createFileRoute, redirect } from "@tanstack/react-router";

// Enquanto o site principal não existe, a página inicial leva para a Bênção das Águas.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/aguas" });
  },
});
