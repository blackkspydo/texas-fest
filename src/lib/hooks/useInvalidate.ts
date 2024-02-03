import React from "react";
import { useQueryClient, QueryKey } from "@tanstack/react-query";

export const useInvalidateData = () => {
  const queryClient = useQueryClient();

  const invalidateData = React.useCallback(
    (queryParam: QueryKey) => {
      queryClient.invalidateQueries({
        queryKey: queryParam
      });
    },
    [queryClient]
  );

  return invalidateData;
};
