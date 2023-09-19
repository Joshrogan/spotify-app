import React from "react";
import { Outlet, RootRoute } from "@tanstack/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../router";
import NavBar from "../components/navbar/NavBar";

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

interface MyRouterContext {
  queryClient: QueryClient;
}

const rootRoute = RootRoute.withRouterContext<MyRouterContext>()({
  component: function Root() {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col">
          <NavBar />
          <Outlet />
        </div>
        <ReactQueryDevtoolsProduction
          initialIsOpen={false}
          position="bottom-left"
        />
      </QueryClientProvider>
    );
  },
});

export default rootRoute;
