//import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres ");
//const useGenres =()=>useData<Genre>('/genres')
const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: { count: genres.length, results: genres, next: null }, // data inserted to the cache
  });

export default useGenres;
