import { type Product, productsApi } from "..";

interface GetProductsOption {
  filterKey?: string;
}

export const getProducts = async ({ filterKey }: GetProductsOption) => {
  const { data } = await productsApi.get<Product[]>("/products");
  return data;
};
