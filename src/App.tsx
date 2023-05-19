import { useQuery } from "@tanstack/react-query";
import { getTopTracks } from "./apis/getTopTracks";

export default function App() {
  const query = useQuery({ queryKey: ["tracks"], queryFn: getTopTracks });
  return (
    <ul>
      {query?.data?.items.map(({ name, artists }) => (
        <li key={name}>
          {name} by {artists.map((artist) => artist.name).join(", ")}
        </li>
      ))}
    </ul>
  );
}
