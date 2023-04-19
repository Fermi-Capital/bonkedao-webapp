import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useApiGet = (url: string, refreshInterval = 5000) => {
  const { data, error } = useSWR(url, fetcher, { refreshInterval });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
