import { Route, Outlet } from "@tanstack/router";
import rootRoute from "../root";
import { useAuth } from "../../components/auth/useAuth";

const tableRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/table",
  component: function Dashboard() {
    const auth = useAuth();

    return auth.status === "loggedIn" ? (
      <div className="h-screen bg-gradient-to-r  from-blue-400 to-pink-500">
        <Outlet />
      </div>
    ) : (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r  from-blue-400 to-pink-500">
        <h1 className="text-4xl font-bold text-white mb-4">
          Can't display table to logged out users
        </h1>
      </div>
    );
  },
});

export default tableRoute;
