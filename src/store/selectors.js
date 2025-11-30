export const selectAllProducts = (state) => state.honey.products;

export const selectTotalQuantity = (state) => {
    return state.honey.products.reduce((total, product) => total + product.quantity, 0);
};

export const selectTotalPrice = (state) => {
    return state.honey.products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0).toFixed(2);
};

export const selectIsOrderValid = (state) => {
    return selectTotalQuantity(state) >= 5;
};

export const selectProductById = (state, productId) => {
    return state.honey.products.find(p => p.id === productId);
};
