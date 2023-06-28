import React from "react";
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
    const auth = useAuth();
    const { code } = useSearch({ from: callbackRoute.id });

    React.useEffect(() => {
      async function getToken() {
        if (code && !auth?.accessToken && auth.status === "loggedOut") {
          const accessToken = await getAccessToken(code);
          auth.login(accessToken);
          router.navigate({ to: "/about" });
        } else {
          router.navigate({ to: "/" });
        }
      }
      getToken();
    }, [code, auth]);

    return <div>Callback</div>;
  },
});

//       const tracks = await fetchProfile(accessToken);
