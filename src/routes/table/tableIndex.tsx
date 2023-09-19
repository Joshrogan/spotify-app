import { Route } from "@tanstack/router";
import tableRoute from "./table";
import Table from "../../components/table/Table";

const tableIndexRoute = new Route({
  getParentRoute: () => tableRoute,
  path: "/",
  component: function TableIndex() {
    return <Table />;
  },
});

export default tableIndexRoute;
