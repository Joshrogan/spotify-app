import { Route, Outlet } from "@tanstack/router";
import rootRoute from "../root";
import { useAuth } from "../../components/auth/useAuth";

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: function Dashboard() {
    const auth = useAuth();

    return auth.status === "loggedIn" ? (
      <Outlet />
    ) : (
      <div>
        <h3>Not logged in</h3>
      </div>
    );
  },
});

export default dashboardRoute;
