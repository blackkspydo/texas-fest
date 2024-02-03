import React from "react";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

interface UseMutateOptions<TData, TError, TVariables, TContext> {
  mutationOptions?: UseMutationOptions<TData, TError, TVariables, TContext>;
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

interface UseMutateProps<TData, TError, TVariables, TContext> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  options?: UseMutateOptions<TData, TError, TVariables, TContext>;
}

export const useMutate = <TData, TError, TVariables, TContext>({
  mutationFn,
  options
}: UseMutateProps<TData, TError, TVariables, TContext>) => {
  const { mutationOptions, onSuccess, onError } = options || {};

  const {
    mutate,
    isPending: isLoading,
    error
  } = useMutation({
    mutationFn,
    ...mutationOptions
  });

  const handleMutate = React.useCallback(
    (variables: TVariables) => {
      mutate(variables, {
        onSuccess,
        onError
      });
    },
    [mutate, onSuccess, onError]
  );

  React.useEffect(() => {
    if (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: (error as any).message || "An error occurred"
      });
    }
  }, [error]);

  return {
    handleMutate,
    isLoading,
    error
  };
};
