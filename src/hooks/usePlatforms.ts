import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platform"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    //initialData: { count: platforms.results.length,  results: platforms }
  });

export default usePlatforms;
