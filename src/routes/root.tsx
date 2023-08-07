import { Outlet, RootRoute } from "@tanstack/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../router";
import NavBar from "../components/navbar/NavBar";

interface MyRouterContext {
  queryClient: QueryClient;
}

const rootRoute = RootRoute.withRouterContext<MyRouterContext>()({
  component: function Root() {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="flex h-screen flex-col">
          <NavBar />
          <Outlet />
        </div>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </QueryClientProvider>
    );
  },
});

export default rootRoute;
