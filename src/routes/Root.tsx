import { Outlet, Link, RootRoute } from "@tanstack/router";
import { useAuth } from "../components/useAuth";

const rootRoute = new RootRoute({
  component: function Root() {
    const auth = useAuth();
    console.log(auth.accessToken);
    return (
      <>
        <div>
          <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
        </div>
        <hr />
        <Outlet />
      </>
    );
  },
});

export default rootRoute;
