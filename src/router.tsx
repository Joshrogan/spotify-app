import { Router } from "@tanstack/router";
import { QueryClient } from "@tanstack/react-query";
import rootRoute from "./routes/root";
import rootIndexRoute from "./routes/index";
import dashboardRoute from "./routes/dashboard/dashboard";
import dashboardIndexRoute from "./routes/dashboard/dashboardIndex";

const routeTree = rootRoute.addChildren([
  rootIndexRoute,
  dashboardRoute.addChildren([dashboardIndexRoute]),
]);

export const queryClient = new QueryClient();

export const router = new Router({
  routeTree: routeTree,
  context: {
    queryClient,
  },
  basepath: import.meta.env.BASE_URL,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
