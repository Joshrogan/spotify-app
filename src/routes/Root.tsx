import { Outlet, Link, RootRoute } from "@tanstack/router";

export const rootRoute = new RootRoute({
  component: () => {
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
