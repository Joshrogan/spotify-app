import { Router } from "@tanstack/router";
import rootRoute from "./routes/Root";
import indexRoute from "./routes/Index";
import aboutRoute from "./routes/About";
import {
  authenticatedIndexRoute,
  authenticatedRoute,
} from "./routes/authenticated";

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  authenticatedRoute.addChildren([authenticatedIndexRoute]),
]);

export const router = new Router({
  routeTree,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
