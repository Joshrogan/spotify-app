import { Route } from "@tanstack/router";
import { rootRoute } from "./Root";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => {
    return (
      <div>
        <h3>Welcome Index!</h3>
      </div>
    );
  },
});

export default indexRoute;
