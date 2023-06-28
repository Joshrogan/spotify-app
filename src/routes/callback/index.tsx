import React, { useRef } from "react";
import { Route, useSearch } from "@tanstack/router";
import { router } from "../../router";
import { z } from "zod";
import rootRoute from "../root";
import { getAccessToken } from "../../spotify/auth/authorize";
import { useAuth } from "../../components/useAuth";

const callbackRouteSchema = z.object({
  code: z.string().optional(),
});

// type CallbackRoute = z.infer<typeof callbackRouteSchema>;

export const callbackRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "callback",
  validateSearch: callbackRouteSchema,
  component: function Callback() {
    const { accessToken, login, status } = useAuth();
    const { code } = useSearch({ from: callbackRoute.id });
    const fetchingAccessToken = useRef(false);

    React.useEffect(() => {
      async function getToken() {
        if (code && !accessToken && status !== "loggedIn") {
          const accessToken = await getAccessToken(code);
          login(accessToken);
          router.navigate({ to: "/about" });
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

    return <div>Callback</div>;
  },
});
