import { Route } from "@tanstack/router";
import tableRoute from "./table";
import { useUsersTopList } from "../../spotify/apis/useSpotifyAPI";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Table from "../../components/table/Table";

const tableIndexRoute = new Route({
  getParentRoute: () => tableRoute,
  path: "/",
  component: function TableIndex() {
    return <Table />;
  },
});

export default tableIndexRoute;
