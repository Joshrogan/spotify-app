import { Route } from "@tanstack/router";
import tableRoute from "./table";
import { useUsersTopList } from "../../spotify/apis/useSpotifyAPI";
import DashboardCard from "../../components/dashboard/DashboardCard";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Table from "../../components/table/Table";

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
        <Table />
      </div>
    );
  },
});

export default tableIndexRoute;
