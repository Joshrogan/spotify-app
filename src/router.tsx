import { Router } from "@tanstack/router";
import rootRoute from "./routes/root";
import indexRoute from "./routes/index";
import aboutRoute from "./routes/about";
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
