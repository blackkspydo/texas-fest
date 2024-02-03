import React from "react";

import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

interface UseFetchProps<T> {
  queryKey: QueryKey;
  fetcher: () => Promise<T>;
  options?: Omit<UseQueryOptions<T, unknown, T, string[]> | undefined, "queryKey">;
}

export const useFetch = <T>({ queryKey, fetcher, options }: UseFetchProps<T>) => {
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: fetcher,
    ...options
  });

  React.useEffect(() => {
    if (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: error.message
      });
    }
  }, [error]);

  return {
    data,
    isLoading,
    error
  };
};
