import { Outlet, Link, RootRoute } from "@tanstack/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../router";
import { redirectToAuthCodeFlow } from "../spotify/auth/authorize";

interface MyRouterContext {
  queryClient: QueryClient;
}

const rootRoute = RootRoute.withRouterContext<MyRouterContext>()({
  component: function Root() {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="flex h-screen flex-col">
          <nav className="flex items-center justify-between bg-pink-400 p-4">
            <ul className="flex space-x-4">
              {(
                [
                  ["/", "Home"],
                  ["/dashboard", "Dashboard"],
                ] as const
              ).map(([to, label]) => {
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      activeOptions={{
                        exact: to === "/",
                      }}
                      className={` text-white `}
                      activeProps={{
                        className: ` text-black underline`,
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div>
              <button
                type="button"
                onClick={() => redirectToAuthCodeFlow()}
                className="text-white bg-green-600 hover:bg-green-400/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 171 171"
                  version="1.1"
                >
                  <g>
                    <path d="M134.562,76.472c-26.994,-16.031 -71.521,-17.505 -97.29,-9.683c-4.138,1.255 -8.514,-1.081 -9.768,-5.219c-1.254,-4.14 1.08,-8.513 5.221,-9.771c29.581,-8.98 78.756,-7.245 109.832,11.202c3.722,2.209 4.943,7.016 2.737,10.732c-2.208,3.722 -7.019,4.949 -10.732,2.739Zm-0.884,23.744c-1.894,3.073 -5.912,4.037 -8.981,2.15c-22.505,-13.833 -56.822,-17.84 -83.447,-9.759c-3.453,1.044 -7.1,-0.903 -8.148,-4.349c-1.041,-3.453 0.907,-7.093 4.353,-8.143c30.416,-9.229 68.227,-4.759 94.075,11.125c3.069,1.89 4.035,5.911 2.148,8.976Zm-10.247,22.803c-1.505,2.468 -4.718,3.241 -7.177,1.737c-19.666,-12.019 -44.418,-14.733 -73.568,-8.075c-2.809,0.644 -5.608,-1.116 -6.249,-3.925c-0.643,-2.808 1.11,-5.608 3.926,-6.249c31.899,-7.292 59.263,-4.154 81.336,9.334c2.461,1.503 3.236,4.718 1.732,7.178Zm-38.406,-120.787c-46.25,-0 -83.744,37.493 -83.744,83.742c0,46.254 37.494,83.744 83.744,83.744c46.251,0 83.743,-37.49 83.743,-83.744c0,-46.249 -37.492,-83.742 -83.743,-83.742Z" />
                  </g>
                </svg>
                Sign in with Spotify
              </button>
            </div>
          </nav>
          <Outlet />
        </div>
      </QueryClientProvider>
    );
  },
});

export default rootRoute;
