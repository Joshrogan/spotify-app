import LoadingSpinner from "../common/LoadingSpinner";
import { redirectToAuthCodeFlow } from "../../spotify/oauth/authorize";
type Props = {
  isLoading: boolean;
};

const LoggedOutView = (props: Props) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Explore your Spotify Data
      </h1>
      <p className="text-lg text-white mb-8">
        Visualize your top artists, tracks, and genres
      </p>
      {props.isLoading ? (
        <LoadingSpinner />
      ) : (
        <button
          onClick={() => redirectToAuthCodeFlow()}
          className="bg-white text-purple-600 py-2 px-6 rounded-full uppercase font-bold hover:bg-purple-600 hover:text-white transition"
        >
          Sign in with Spotify
        </button>
      )}
    </div>
  );
};

export default LoggedOutView;
