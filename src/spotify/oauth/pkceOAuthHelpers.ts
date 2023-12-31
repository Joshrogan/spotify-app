export function generateRandomString(length: number) {
  let text = "";
  const POSSIBLE =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));
  }
  return text;
}

export async function generateCodeChallenge(codeVerifier: string) {
  function base64encode(string: ArrayBuffer) {
    return btoa(
      String.fromCharCode.apply(
        null,
        Array.from<number>(new Uint8Array(string))
      )
    )
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return base64encode(digest);
}
