import { useQuery } from "@tanstack/react-query";
import api from "../api/productApi";

const useProducts = (selectedCategory) => {
  async function queryFn() {
    return await api.get(
      `products/${selectedCategory ? `category/${selectedCategory}` : ""}`
    );
  }
  return useQuery({
    queryKey: ["allProducts", selectedCategory],
    queryFn,
    keepPreviousData: true,
    enabled: !!selectedCategory || selectedCategory === null,
  });
};
export default useProducts;
