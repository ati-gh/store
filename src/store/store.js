import { create } from "zustand";

const useStore = create((set, get) => ({
  productsCard: [],
  inc: (product) =>
    set((state) => {
      const productIndex = state.productsCard.findIndex(
        (item) => item.id === product?.id
      );
      if (productIndex !== -1) {
        const newProduct = [...state.productsCard];
        newProduct[productIndex].quantity += 1;
        return { productsCard: newProduct };
      } else {
        return {
          productsCard: [
            ...state.productsCard,
            { id: product?.id, quantity: 1 },
          ],
        };
      }
    }),
  dec: (product) =>
    set((state) => {
      const productIndex = state.productsCard.findIndex(
        (item) => item.id === product?.id
      );
      if (productIndex !== -1) {
        const updateProducts = [...state.productsCard];
        if (updateProducts[productIndex].quantity > 0) {
          updateProducts[productIndex].quantity -= 1;
        }
        return { productsCard: updateProducts };
      }
    }),
}));
export default useStore;
