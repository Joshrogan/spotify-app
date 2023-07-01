import { Route } from "@tanstack/router";
import { useQuery } from "@tanstack/react-query";
import dashboardRoute from "./dashboard";
import { useAuth } from "../../components/useAuth";
import { fetchProfile } from "../../spotify/apis/getTopTracks";

const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: function DashboardIndex() {
    const auth = useAuth();

    const { data, isLoading, isError } = useQuery(
      ["todo", auth.accessToken],
      fetchProfile
    );

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
