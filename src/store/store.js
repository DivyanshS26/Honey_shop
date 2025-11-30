import { configureStore } from '@reduxjs/toolkit';
import honeyReducer from './slices/honeySlice';

const store = configureStore({
    reducer: {
        honey: honeyReducer,
    },
});

export default store;
