import { Route } from "@tanstack/router";
import rootRoute from "./Root";

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => {
    return <div>About</div>;
  },
});

export default aboutRoute;
