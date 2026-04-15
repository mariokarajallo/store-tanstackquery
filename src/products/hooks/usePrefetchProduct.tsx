import { useQueryClient } from "@tanstack/react-query";
import { productsActions } from "..";

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchProduct = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ["product", { id }],
      queryFn: () => productsActions.getProductById(id),
      staleTime: 1000 * 60 * 60,
    });
  };

  return prefetchProduct;
};