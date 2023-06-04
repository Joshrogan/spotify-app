import { Router } from "@tanstack/router";
import rootRoute from "./routes/Root";
import indexRoute from "./routes/Index";
import aboutRoute from "./routes/About";

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({
  routeTree,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
