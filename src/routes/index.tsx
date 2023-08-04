import React, { useRef } from "react";
import { Route, useSearch } from "@tanstack/router";
import { router } from "../router";
import { z } from "zod";
import rootRoute from "./root";
import { getAccessToken } from "../spotify/oauth/authorize";
import { useAuth } from "../components/auth/useAuth";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { redirectToAuthCodeFlow } from "../spotify/oauth/authorize";

const callbackSchema = z.object({
  code: z.string().optional(),
});

export const rootIndexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: callbackSchema,
  component: function Callback() {
    const { accessToken, login, status } = useAuth();
    const { code } = useSearch({ from: rootIndexRoute.id });
    const fetchingAccessToken = useRef(false);
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
        <div>
          <h3>need to login</h3>
          <button onClick={() => redirectToAuthCodeFlow()}>Login</button>
        </div>
      );
    }
  },
});

export default rootIndexRoute;
