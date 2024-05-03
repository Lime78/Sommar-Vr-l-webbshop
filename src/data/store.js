// import { create } from 'zustand';

// const useStore = create((set) => ({
//     storeList: [],
//     cart: [],
//     setStoreList: (storeList) => set({ storeList }),
//     addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),

//     storeList: [],
//         cart: [],
//         setStoreList: (storeList) => set({ storeList }),
//         addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
//         removeFromCart: (product) =>
//         set((state) => ({ cart: state.cart.filter((item) => item !== product) })),

//     }));

// export { useStore };

import { create } from 'zustand';

const useStore = create((set) => ({
    storeList: [],
    cart: [],
    setStoreList: (storeList) => set({ storeList }),
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((item) => item !== product) })),
}));

export { useStore };