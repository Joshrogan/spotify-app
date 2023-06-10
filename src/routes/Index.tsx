import { Route } from "@tanstack/router";
import { rootRoute } from "./root";
import { router } from "../router";
import { getAccessTokenFromSessionStorage } from "../spotify/auth/authorize";

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
  beforeLoad: () => {
    const accessToken = getAccessTokenFromSessionStorage();
    if (accessToken) {
      console.log("accessToken", accessToken);
    } else {
      router.navigate({ to: "/authenticated" });
    }
  },
});

export default indexRoute;
