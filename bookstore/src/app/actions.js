import { createAction } from '@reduxjs/toolkit';

export const fetchBooks = createAction('FETCH_BOOKS');
export const addBook = createAction('ADD_BOOK');
export const updateBook = createAction('UPDATE_BOOK');
export const deleteBook = createAction('DELETE_BOOK');
export const searchBook = createAction("SEARCH_BOOK")
