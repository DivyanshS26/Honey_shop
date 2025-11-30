import { createSlice } from '@reduxjs/toolkit';

const initialHoneyData = [
    {
        id: 1,
        name: 'Wildflower Honey',
        price: 12.99,
        image: 'https://www.littleoverapiaries.com/wp-content/uploads/2009/10/190717-Littleover-Apiaries_Organic_Wildflower_0015_hi-res_retouch_900px.jpg',
        quantity: 0,
    },
    {
        id: 2,
        name: 'Clover Honey',
        price: 14.99,
        image: 'https://www.littleoverapiaries.com/wp-content/uploads/2009/10/190717-Littleover-Apiaries_Pure_Organic_Clover_0022_hi-res_retouch_900px.jpg',
        quantity: 0,
    },
    {
        id: 3,
        name: 'Acacia Honey',
        price: 16.99,
        image: 'https://www.littleoverapiaries.com/wp-content/uploads/2009/10/190717-Littleover-Apiaries_Acacia_0005_hi-res_retouch_900px-1.jpg',
        quantity: 0,
    },
];

const honeySlice = createSlice({
    name: 'honey',
    initialState: {
        products: initialHoneyData,
    },
    reducers: {
        incrementQuantity: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product && product.quantity > 0) {
                product.quantity -= 1;
            }
        },
        setQuantity: (state, action) => {
            const product = state.products.find(p => p.id === action.payload.id);
            if (product) {
                product.quantity = Math.max(0, action.payload.quantity);
            }
        },
        resetCart: (state) => {
            state.products.forEach(product => {
                product.quantity = 0;
            });
        },
    },
});

export const { incrementQuantity, decrementQuantity, setQuantity, resetCart } = honeySlice.actions;
export default honeySlice.reducer;
