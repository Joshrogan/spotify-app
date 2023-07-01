import axios from "axios";

export async function fetchProfile(): Promise<any> {
  const response = await axios.get("https://api.spotify.com/v1/me");

  return response.data;
}
