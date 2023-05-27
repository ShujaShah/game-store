import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    // initialData: { count: platforms.results.length,  results: platforms }
  });

export default usePlatforms;
