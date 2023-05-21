import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";


const apiClient = new APIClient<Platform>('/platforms/lists/parents')
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    //initialData: { count: platforms.results.length,  results: platforms }
  });

export default usePlatforms;
