import { createSlice } from '@reduxjs/toolkit';
import bluetenhonig from '../../assets/bluetenhonig.png';
import sommerbluetenhonig from '../../assets/sommerbluetenhonig.png';
import waldhonig from '../../assets/waldhonig.png';

const initialHoneyData = [
    {
        id: 1,
        name: 'Blossom Honey',
        price: 12.99,
        image: bluetenhonig,
        quantity: 0,
    },
    {
        id: 2,
        name: 'Summer Blossom Honey',
        price: 14.99,
        image: sommerbluetenhonig,
        quantity: 0,
    },
    {
        id: 3,
        name: 'Forest Honey',
        price: 16.99,
        image: waldhonig,
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
