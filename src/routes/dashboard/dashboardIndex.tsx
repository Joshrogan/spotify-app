import { Route } from "@tanstack/router";
import dashboardRoute from "./dashboard";
import { useUsersTopList } from "../../spotify/apis/useSpotifyAPI";
import DashboardCard from "../../components/dashboard/DashboardCard";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: function DashboardIndex() {
    const {
      data: userTopArtistsData,
      isLoading,
      isError,
    } = useUsersTopList("artist");

    if (isLoading) return <LoadingSpinner />;

    if (isError) return <div>Error</div>;

    return (
      <>
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Your top artists
        </h1>
        <div className="flex flex-wrap p-1 justify-center	">
          {userTopArtistsData?.items.map((artist) => (
            <DashboardCard name={artist.name} genres={artist.genres} />
          ))}
        </div>
      </>
    );
  },
});

export default dashboardIndexRoute;
