import axios from "axios";
import { z } from "zod";
import { useQuery, QueryFunctionContext } from "@tanstack/react-query";

const BASE_SPOTIFY_URI = "https://api.spotify.com/v1";

const userProfileKeys = {
  all: [{ scope: "spotify" }] as const,
  me: () => [{ ...userProfileKeys.all[0], entity: "me" }] as const,
  topList: (type: ListType) => [{ ...userProfileKeys.me()[0], type }] as const,
};

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

const ItemSchema = z.object({
  external_urls: z.object({
    spotify: z.string(),
  }),
  followers: z.object({
    href: z.string().nullable(),
    total: z.number(),
  }),
  genres: z.array(z.string()),
  href: z.string(),
  id: z.string(),
  images: z
    .array(
      z.object({
        url: z.string(),
        height: z.number(),
        width: z.number(),
      })
    )
    .optional(),
  name: z.string(),
  popularity: z.number(),
  type: z.union([z.literal("artist"), z.literal("track")]),
  uri: z.string(),
});

const ListSchema = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(ItemSchema),
});

type ListType = z.TypeOf<typeof ItemSchema>["type"];

// type UserProfile = z.infer<typeof userProfileSchema>;

const fetchUserProfile = async ({
  queryKey: [{ entity }],
}: QueryFunctionContext<ReturnType<(typeof userProfileKeys)["me"]>>) => {
  const response = await axios.get(`${BASE_SPOTIFY_URI}/${entity}`);

  const data = userProfileSchema.parse(response.data);
  return data;
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: userProfileKeys.me(),
    queryFn: fetchUserProfile,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

const fetchUsersTopList = async ({
  queryKey: [{ entity, type }],
}: QueryFunctionContext<ReturnType<(typeof userProfileKeys)["topList"]>>) => {
  const pluralType = `${type}s`;

  const response = await axios.get(
    `${BASE_SPOTIFY_URI}/${entity}/top/${pluralType}`
  );

  const data = ListSchema.parse(response.data);
  return data;
};

export const useUsersTopList = (type: ListType) => {
  return useQuery({
    queryKey: userProfileKeys.topList(type),
    queryFn: fetchUsersTopList,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
