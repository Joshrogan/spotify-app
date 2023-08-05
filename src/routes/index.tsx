import React from "react";
import { Route, useSearch } from "@tanstack/router";
import { router } from "../router";
import { z } from "zod";
import rootRoute from "./root";
import { getAccessToken } from "../spotify/oauth/authorize";
import { useAuth } from "../components/auth/useAuth";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { redirectToAuthCodeFlow } from "../spotify/oauth/authorize";

const spotifyCallbackSearchParamSchema = z.object({
  code: z.string().optional(),
});

export const rootIndexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: spotifyCallbackSearchParamSchema,
  component: function Callback() {
    const { accessToken, login, status } = useAuth();
    const { code } = useSearch({ from: rootIndexRoute.id });
    const fetchingAccessToken = React.useRef(false);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
      async function getToken() {
        if (code && !accessToken && status !== "loggedIn") {
          setIsLoading(true);
          const accessToken = await getAccessToken(code);
          login(accessToken);
          setIsLoading(false);
          router.navigate({ to: "/dashboard" });
        } else {
          router.navigate({ to: "/" });
        }
      }
      if (fetchingAccessToken.current === false) {
        getToken();
      }

      return () => {
        fetchingAccessToken.current = true;
      };
    }, [login, status, code, accessToken]);

    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (status === "loggedIn") {
      return (
        <div>
          <h3>Welcome Index!</h3>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r  from-pink-400 to-blue-500">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Explore your Spotify Data
            </h1>
            <p className="text-lg text-white mb-8">
              Visualize your top artists, tracks, and genres
            </p>
            <a
              href="#"
              className="bg-white text-purple-600 py-2 px-6 rounded-full uppercase font-bold hover:bg-purple-600 hover:text-white transition"
            >
              Login
            </a>
          </div>
        </div>
      );
    }
  },
});

export default rootIndexRoute;
