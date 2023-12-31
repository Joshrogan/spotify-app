import { Route, Outlet } from "@tanstack/router";
import rootRoute from "../root";
import { useAuth } from "../../components/auth/useAuth";

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: function Dashboard() {
    const auth = useAuth();

    return auth.status === "loggedIn" ? (
      <div className="h-max bg-gradient-to-r  from-blue-400 to-pink-500">
        <Outlet />
      </div>
    ) : (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r  from-blue-400 to-pink-500">
        <h1 className="text-4xl font-bold text-white mb-4">
          Can't display dashboard to logged out users
        </h1>
      </div>
    );
  },
});

export default dashboardRoute;
