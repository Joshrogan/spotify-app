import { Route } from "@tanstack/router";
import rootRoute from "./root";
import { useAuth } from "../components/useAuth";

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    const auth = useAuth();
    console.log(auth);
    return <div>About</div>;
  },
});

export default aboutRoute;
