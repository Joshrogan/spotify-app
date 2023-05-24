import { useEffect, useState } from "react";
import {
  redirectToAuthCodeFlow,
  getAccessToken,
  handleRefreshToken,
} from "./auth/authorize";

export default function App() {
  const [test, setTest] = useState("");
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code) {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        })
          .then((data) => data.json())
          .then((result) => setTest(result.display_name));
      } else {
        getAccessToken();
      }
    }
  }, [code]);

  const handleClick = async () => {
    try {
      await redirectToAuthCodeFlow();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRefresh = async () => {
    try {
      await handleRefreshToken();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch data</button>
      <button onClick={handleRefresh}>Refresh</button>
      {test}
    </div>
  );
}
