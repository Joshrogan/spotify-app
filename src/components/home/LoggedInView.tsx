import LoadingSpinner from "../common/LoadingSpinner";
import { useUserProfile } from "../../spotify/apis/useSpotifyAPI";

const LoggedInView = () => {
  const { data: userProfileData, isLoading } = useUserProfile();

  console.log(userProfileData);
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Welcome {userProfileData?.display_name}
      </h1>
      <p className="text-lg text-white mb-8">
        You have {userProfileData?.followers.total} total followers on spotify.
      </p>
    </div>
  );
};

export default LoggedInView;
