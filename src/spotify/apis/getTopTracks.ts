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

export type Tracks = z.infer<typeof TracksSchema>;

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

async function fetchWebApi(
  endpoint: string,
  method: string,
  accessToken: string
): Promise<Tracks> {
  const result = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method,
  });
  const json = await result.json();
  TracksSchema.parse(json);
  return json;
}

export async function getTopTracks(accessToken: string | undefined) {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  if (accessToken) {
    const getTopTracksJson = await fetchWebApi(
      "v1/me/top/tracks?time_range=short_term&limit=5",
      "GET",
      accessToken
    );
    return getTopTracksJson;
  }
}
