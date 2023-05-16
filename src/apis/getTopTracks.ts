// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQDVEm62i6lxA6hjRoEIxAIg_ZlDn-n8LvcnFXTHOfxOCzIMb0ZtGqoodvPzIxuMZGPEWEPHzIqXaIlB78JTMPdcOBl8Ft7eJsFXzavEKWUEjIlv_PzYRYE_nPwIstU9IyFeGRsrjsWpdfQr6fwI_TtNaIVgGhBVuU1Cg3rC9hrULIPV2AWAHVj7iWO4tGP-mSyWP1ipdOXlqRUL6yqH82MUtgk-0qCHLKi9HFwH6xfRtiZQi92S6ygFn26lZQviSD8st30";
async function fetchWebApi(endpoint: string, method: string, body?: object) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

export async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
  ).items;
}

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({ name, artists }) =>
//       `${name} by ${artists.map((artist) => artist.name).join(", ")}`
//   )
// );
