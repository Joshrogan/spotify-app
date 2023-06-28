import { Route } from "@tanstack/router";
import rootRoute from "./root";
import { useAuth } from "../components/useAuth";
import { redirectToAuthCodeFlow } from "../spotify/auth/authorize";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    const auth = useAuth();
    console.log(auth);
    if (auth.status === "loggedIn") {
      return (
        <div>
          <h3>Welcome Index!</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>need to login</h3>
          <button onClick={() => redirectToAuthCodeFlow()}>Login</button>
        </div>
      );
    }
  },
});

export default indexRoute;
