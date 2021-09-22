import { configureStore } from '@reduxjs/toolkit';
import booksReducers from "./Book/reducer"
import receiptsReducers from "./Receipt/reducer"
import customersReducers from "./Customer/reducer"

export default configureStore({
    reducer: {
        books: booksReducers,
        receipts: receiptsReducers,
        customers: customersReducers
      }
});
