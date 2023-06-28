import React from "react";
import { Router } from "@tanstack/router";
import rootRoute from "./routes/root";
import indexRoute from "./routes/index";
import aboutRoute from "./routes/about";
import { callbackRoute } from "./routes/callback";
import { AuthContext } from "./components/AuthProvider";

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  callbackRoute,
]);

export const router = new Router({
  routeTree: routeTree,
  useContext: () => {
    return {
      auth: React.useContext(AuthContext),
    };
  },
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
