import { Route } from "@tanstack/router";
import dashboardRoute from "./dashboard";
import { useAuth } from "../../components/useAuth";

const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: () => {
    const auth = useAuth();
    console.log(auth);

    return (
      <div className="p-2">
        <div className="p-2">
          Welcome to the dashboard! here's your auth:
          {JSON.stringify(auth)}
        </div>
      </div>
    );
  },
});

export default dashboardIndexRoute;
