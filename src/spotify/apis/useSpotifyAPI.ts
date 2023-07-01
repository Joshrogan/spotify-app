import axios from "axios";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";

const BASE_SPOTIFY_URI = "https://api.spotify.com/v1";

const userProfileSchema = z.object({
  display_name: z.string(),
  followers: z.object({
    total: z.number(),
  }),
  images: z.array(
    z.object({
      url: z.string().url(),
    })
  ),
});

type UserProfile = z.infer<typeof userProfileSchema>;

export async function fetchUserProfile() {
  const response = await axios.get(`${BASE_SPOTIFY_URI}/me`);

  const data = userProfileSchema.parse(response.data);
  return data;
}

export const useUserProfile = () => {
  return useQuery<UserProfile>({
    queryKey: ["spotify", "profile"],
    queryFn: fetchUserProfile,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
