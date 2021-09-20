import { createAction } from '@reduxjs/toolkit';

export const fetchReceipts = createAction('FETCH_RECEIPTS');
export const addReceipt = createAction('ADD_RECEIPT');
export const updateReceipt = createAction('UPDATE_RECEIPT');
export const deleteReceipt = createAction('DELETE_RECEIPT');
export const searchReceipt = createAction("SEARCH_RECEIPT");
