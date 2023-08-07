import React from "react";
import { z } from "zod";
import { Route, useSearch } from "@tanstack/router";
import rootRoute from "./root";
import { router } from "../router";
import { getAccessToken } from "../spotify/oauth/authorize";
import { useAuth } from "../components/auth/useAuth";
import LoggedOutView from "../components/home/LoggedOutView";
import LoggedInView from "../components/home/LoggedInView";

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

    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-r  from-pink-400 to-blue-500">
        {status === "loggedIn" ? (
          <LoggedInView />
        ) : (
          <LoggedOutView isLoading={isLoading} />
        )}
      </div>
    );
  },
});

export default rootIndexRoute;
