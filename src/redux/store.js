import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/product";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "../services/blog";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(blogApi.middleware),
});

setupListeners(store.dispatch);
