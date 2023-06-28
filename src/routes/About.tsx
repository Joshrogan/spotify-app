import { Route } from "@tanstack/router";
import rootRoute from "./root";
import { useAuth } from "../components/useAuth";

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",

  component: function About() {
    const auth = useAuth();
    return auth.status === "loggedIn" ? (
      <div>
        <h3>Welcome to About!</h3>
      </div>
    ) : (
      <div>
        <h3>Not logged in</h3>
      </div>
    );
  },
});

export default aboutRoute;
