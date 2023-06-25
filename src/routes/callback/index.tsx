import { Route } from "@tanstack/router";
import { z } from "zod";
import { rootRoute } from "../root";
import { getAccessToken } from "../../spotify/auth/authorize";
import { fetchProfile } from "../../spotify/apis/getTopTracks";

const callbackRouteSchema = z.object({
  code: z.string().optional(),
});

type CallbackRoute = z.infer<typeof callbackRouteSchema>;

export const callbackRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "callback",
  validateSearch: callbackRouteSchema,

  loader: async ({ search }) => {
    const existingToken = sessionStorage.getItem("accessToken");
    if (search.code && !existingToken) {
      if (sessionStorage.getItem("fetchingToken")) {
        return;
      }
      sessionStorage.setItem("fetchingToken", "true");
      const accessToken = await getAccessToken(search.code);

      const tracks = await fetchProfile(accessToken);
      console.log("### tracks", tracks);
    }
    if (existingToken) {
      const tracks = await fetchProfile(existingToken);
      console.log("### tracks", tracks);
    }
  },
});
