import { create } from 'zustand';

const useStore = create((set) => ({
    storeList: [],
    cart: [],
    setStoreList: (storeList) => set({ storeList }),
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    }));

export { useStore };