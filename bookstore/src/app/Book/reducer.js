import { createReducer } from "@reduxjs/toolkit";

import {
	fetchBooks,
	addBook,
	updateBook,
	deleteBook,
    searchBook,
	detailBook,
} from "./actions";

export default createReducer([], {
	[fetchBooks]: (state, action) => {
		return action.payload;
	},
	[addBook]: (state, action) => {
		state.push(action.payload);
	},
	[updateBook]: (state, action) => {
		const bookIndex = state.findIndex(
			(book) => book._id === action.payload._id,
		);
		state[bookIndex] = action.payload;
	},
	[deleteBook]: (state, action) => {
		const bookIndex = state.findIndex(
			(book) => book._id === action.payload._id,
		);
		state.splice(bookIndex, 1);
	},
    [searchBook]: (state, action) =>{
		const id = action.payload
		return state.filter((book) =>{
			return book._id === id
		})
    },
	[detailBook]: (state, action) =>{
		return state.payload
	}
});
