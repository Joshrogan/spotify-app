import { Router } from "@tanstack/router";
import rootRoute from "./routes/root";
import indexRoute from "./routes/index";
import dashboardRoute from "./routes/dashboard/dashboard";
import dashboardIndexRoute from "./routes/dashboard/dashboardIndex";
import { callbackRoute } from "./routes/callback";

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute.addChildren([dashboardIndexRoute]),
  callbackRoute,
]);

export const router = new Router({
  routeTree: routeTree,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
