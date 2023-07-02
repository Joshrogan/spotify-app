import { RouterProvider, Router, RootRoute, Route } from "@tanstack/router";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import dashboardRoute from "./dashboard";

const rootRoute = new RootRoute();

const dashboardTestRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
});

const routeTree = rootRoute.addChildren([dashboardTestRoute]);

const router = new Router({
  routeTree: routeTree,
});

describe("dashboard", () => {
  it("renders", async () => {
    render(<RouterProvider router={router} />);

    const notLoggedIn = await screen.findByText("Not logged in");
    expect(notLoggedIn).toBeInTheDocument();
  });
});
