import { Router } from "@tanstack/router";
import { QueryClient } from "@tanstack/react-query";
import rootRoute from "./routes/root";
import indexRoute from "./routes/index";
import dashboardRoute from "./routes/dashboard/dashboard";
import dashboardIndexRoute from "./routes/dashboard/dashboardIndex";
import { callbackRoute } from "./routes/callback";
const BASE = import.meta.env.BASE_URL;

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute.addChildren([dashboardIndexRoute]),
  callbackRoute,
]);

export const queryClient = new QueryClient();

export const router = new Router({
  routeTree: routeTree,
  context: {
    queryClient,
  },
  basepath: BASE,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
