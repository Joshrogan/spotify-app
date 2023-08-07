import { Route } from "@tanstack/router";
import dashboardRoute from "./dashboard";
import {
  useUserProfile,
  useUsersTopList,
} from "../../spotify/apis/useSpotifyAPI";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import DashboardCard from "../../components/dashboard/DashboardCard";

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

    if (isLoading) return <LoadingSpinner />;

    if (isError) return <div>Error</div>;

    return (
      <div className="flex flex-wrap p-1 justify-center	">
        {userTopArtistsData?.items.map((artist) => (
          <DashboardCard name={artist.name} genres={artist.genres} />
        ))}
      </div>
    );
  },
});

export default dashboardIndexRoute;
