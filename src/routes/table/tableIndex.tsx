import { Route } from "@tanstack/router";
import tableRoute from "./table";
import { useUsersTopList } from "../../spotify/apis/useSpotifyAPI";
import DashboardCard from "../../components/dashboard/DashboardCard";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const tableIndexRoute = new Route({
  getParentRoute: () => tableRoute,
  path: "/",
  component: function TableIndex() {
    const {
      data: userTopArtistsData,
      isLoading,
      isError,
    } = useUsersTopList("artist");

    if (isLoading) {
      return (
        <div className="h-screen">
          <LoadingSpinner />
        </div>
      );
    }

    if (isError) return <div>Error</div>;

    return (
      <div className="pt-1">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Your top artists
        </h1>
        <div className="flex flex-wrap p-1 justify-center	">
          {userTopArtistsData?.items.map((artist, i) => (
            <DashboardCard key={i} name={artist.name} genres={artist.genres} />
          ))}
        </div>
      </div>
    );
  },
});

export default tableIndexRoute;
