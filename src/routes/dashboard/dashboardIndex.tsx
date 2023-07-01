import { Route } from "@tanstack/router";
import dashboardRoute from "./dashboard";
import { useUserProfile } from "../../spotify/apis/useSpotifyAPI";

const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: function DashboardIndex() {
    const { data, isLoading, isError } = useUserProfile();

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error</div>;

    return (
      <div className="p-2">
        <div className="p-2">
          Welcome to the dashboard! here's your auth:
          {JSON.stringify(data)}
        </div>
      </div>
    );
  },
});

export default dashboardIndexRoute;
