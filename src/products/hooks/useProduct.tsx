import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  id: number;
}

export const useProduct = ({ id}: Options) => {
  const {
    data: product,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => productsActions.getProductById(id),
    staleTime: 1000 * 60 * 60,
  });

  return {
    product,
    isLoading,
    isError,
    error,
    isFetching,
  };
};
