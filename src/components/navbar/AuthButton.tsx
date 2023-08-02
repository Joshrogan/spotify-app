import SpotifySvg from "./SpotifySvg";
import { redirectToAuthCodeFlow } from "../../spotify/oauth/authorize";
import { useAuth } from "../auth/useAuth";

function AuthButton() {
  const { status, logout } = useAuth();

  return (
    <button
      type="button"
      onClick={() => {
        status === "loggedIn" ? logout() : redirectToAuthCodeFlow();
      }}
      className="text-white bg-green-600 hover:bg-green-400/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
    >
      <SpotifySvg />
      {status === "loggedIn" ? "Sign Out Of" : "Sign In With"} Spotify
    </button>
  );
}

export default AuthButton;
