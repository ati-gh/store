import { create } from "zustand";

const useStore = create((set) => ({
  productsCard: [],
  inc: (product) =>
    set((state) => {
      const productIndex = state.productsCard.findIndex(
        (item) => item.id === product?.id
      );
      if (productIndex !== -1) {
        const newProduct = [...state.productsCard];
        newProduct[productIndex].quantity += 1;
        return { product: newProduct };
      } else {
        return {
          productsCard: [
            ...state.productsCard,
            { id: product?.id, quantity: 1 },
          ],
        };
      }
    }),
}));
export default useStore;
