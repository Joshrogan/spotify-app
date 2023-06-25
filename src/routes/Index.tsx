import { Route } from "@tanstack/router";
import { rootRoute } from "./root";
import { redirectToAuthCodeFlow } from "../spotify/auth/authorize";

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

  loader: () => {
    redirectToAuthCodeFlow();
  },
});

export default indexRoute;
