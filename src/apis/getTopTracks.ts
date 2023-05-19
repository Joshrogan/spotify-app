import { z } from "zod";

const Artist = z.object({
  name: z.string(),
});

const Track = z.object({
  name: z.string(),
  artists: z.array(Artist),
});
// items[0].artists[0].name
// items[0].name
const TracksSchema = z.object({
  items: z.array(Track),
});

type Tracks = z.infer<typeof TracksSchema>;

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQDywXyZCqR8cx720mv-gn7V7aFOdlDw7kTkOyrievDXM_WzRYi30cSvXp2RhP9mZWOlN6F_nYhObBeHnPpjWLfXQi9tTFuhdPy6t7GpnnMV9SjIy2TkeoQd9wrjlnILdFN-MqawBIVXtOoRBylcvEIP_JbJ-65GQSP-OuO99SVQKaYTGngQLYQ-5prwH9IWQZJqz1BxcNc769CeijiYhedW6BU7FwlefUGz2LVd9alGyb6uEtZVc664nGC8j188GovsT2A";

async function fetchWebApi(
  endpoint: string,
  method: string,
  body?: object
): Promise<Tracks> {
  const result = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  const json = await result.json();
  TracksSchema.parse(json);
  return json;
}

export async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  const getTopTracksJson = await fetchWebApi(
    "v1/me/top/tracks?time_range=short_term&limit=5",
    "GET"
  );
  return getTopTracksJson;
}
