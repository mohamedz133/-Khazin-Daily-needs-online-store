import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: []
    , filteredProducts: []
}
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            // console.log(state)
            state.products= action.payload;
            state.filteredProducts= action.payload;
        },
        filterProductsBycat(state, action) {
            //payload is category


            state.filteredProducts = state.products.filter((item) => {
                return (item.productType === action.payload);

            })

        }, searchFilteredProducts(state, action) {
            //payload is category


            state.filteredProducts = state.products.filter((item) => {
                return (item.name.includes(`${action.payload}`));

            })

        }
    }
})
export const store = configureStore({
    reducer: productsSlice.reducer
})


export const productActions = productsSlice.actions;
export const reducer = productsSlice.reducer;