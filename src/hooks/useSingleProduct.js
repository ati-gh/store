import { useQuery } from "@tanstack/react-query";
import api from "../api/productApi";

const useSingleProduct = (id) => {
  async function queryFn() {
    return await api.get(`products/${id}`);
  }
  return useQuery({
    queryKey: ["singleCartProducts"],
    queryFn,
  });
};
export default useSingleProduct;
