import { configureStore } from '@reduxjs/toolkit';
import booksReducers from "./reducer"

export default configureStore({
    reducer: {
        books: booksReducers,
      }
});
