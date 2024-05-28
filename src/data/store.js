import { create } from 'zustand';

const useStore = create((set) => ({
    storeList: [],
    cart: [],
    setStoreList: (storeList) => set({ storeList }),
    addToCart: (product) => set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] })),
    removeFromCart: (product, quantity = 1) => {
        set((state) => {
            const updatedCart = [...state.cart];
            const index = updatedCart.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                if (updatedCart[index].quantity <= quantity) {
                    updatedCart.splice(index, 1); // Remove the entire product if quantity to remove exceeds the quantity in the cart
                } else {
                    updatedCart[index].quantity -= quantity; // Decrease the quantity of the product in the cart
                }
            }
            return { cart: updatedCart };
        });
    },
}));

export { useStore };
