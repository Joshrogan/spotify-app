import { Outlet, Link, RootRoute } from "@tanstack/router";
import { useAuth } from "../components/useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../router";

interface MyRouterContext {
  queryClient: QueryClient;
}

const rootRoute = RootRoute.withRouterContext<MyRouterContext>()({
  component: function Root() {
    const auth = useAuth();
    console.log(auth);

    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Link to="/">Home</Link> <Link to="/dashboard">Dashboard</Link>{" "}
        </div>
        <hr />
        <Outlet />
      </QueryClientProvider>
    );
  },
});

export default rootRoute;
