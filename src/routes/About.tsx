import { Route } from "@tanstack/router";
import rootRoute from "./root";

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => {
    return <div>About</div>;
  },
});

export default aboutRoute;
