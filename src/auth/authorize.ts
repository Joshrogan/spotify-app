import {
  generateCodeChallenge,
  generateRandomString,
} from "./pkceOAuthHelpers";

export const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = "http://localhost:5173";

export async function redirectToAuthCodeFlow() {
  const codeVerifier = generateRandomString(128);

  const challenge = await generateCodeChallenge(codeVerifier);
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  localStorage.setItem("code_verifier", codeVerifier);

  const params = new URLSearchParams();
  params.append("response_type", "code");
  params.append("client_id", clientId);
  params.append("scope", scope);
  params.append("redirect_uri", redirectUri);
  params.append("state", state);
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export async function getAccessToken(): Promise<any> {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const codeVerifier = localStorage.getItem("code_verifier");

  if (codeVerifier && code) {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", redirectUri);
    params.append("client_id", clientId);
    params.append("code_verifier", codeVerifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    console.log("## result 1", result);

    const resultJson = await result.json();
    console.log("## result 2", resultJson);
    if (resultJson?.access_token) {
      localStorage.setItem("access_token", resultJson.access_token);
      localStorage.setItem("refresh_token", resultJson.refresh_token);
    }

    return resultJson?.access_token;
  }
}

export async function handleRefreshToken(): Promise<any> {
  const refreshToken = localStorage.getItem("refresh_token");
  console.log("## calling");
  if (refreshToken) {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);
    params.append("client_id", clientId);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    console.log("## result 1", result);

    const resultJson = await result.json();
    console.log("## result 2", resultJson);
  }
}
