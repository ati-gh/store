import { useQuery } from "@tanstack/react-query";
import api from "../api/productApi";

const useProducts = () => {
  async function queryFn() {
    return await api.get("products");
  }
  return useQuery({
    queryKey: ["allProducts"],
    queryFn,
  });
};
export default useProducts;
