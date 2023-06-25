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

export async function fetchProfile(code: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${code}` },
  });

  return await result.json();
}
