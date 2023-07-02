import { Route } from "@tanstack/router";
import dashboardRoute from "./dashboard";
import {
  useUserProfile,
  useUsersTopList,
} from "../../spotify/apis/useSpotifyAPI";

const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: function DashboardIndex() {
    const { data: userProfileData } = useUserProfile();
    const {
      data: userTopArtistsData,
      isLoading,
      isError,
    } = useUsersTopList("artist");

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error</div>;

    return (
      <div className="p-2">
        <div className="p-2">
          Welcome to the dashboard! here's your auth:
          {JSON.stringify(userTopArtistsData)}
          {JSON.stringify(userProfileData)}
        </div>
      </div>
    );
  },
});

export default dashboardIndexRoute;
