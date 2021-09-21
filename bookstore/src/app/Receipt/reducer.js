import { createReducer } from "@reduxjs/toolkit";

import {
	fetchReceipts,
	addReceipt,
	updateReceipt,
	deleteReceipt,
    searchReceipt,
} from "./actions";

export default createReducer([], {
	[fetchReceipts]: (state, action) => {
		return action.payload;
	},
	[addReceipt]: (state, action) => {
		state.push(action.payload);
	},
	[updateReceipt]: (state, action) => {
		const receiptIndex = state.Order.findIndex(
			(receipt) => receipt.Buy.Buy_id === action.payload.id
		);
		const x = {
			Buy_id: action.payload.id,
			quantity: action.payload.quantity,
			total: action.payload.quantity * state.Order[receiptIndex].Book.price
		}
		state.Order[receiptIndex].Buy = x
		const calTotal = state.Order.map(receipt =>{
			return receipt.Buy.total
		})
		state.Total = calTotal.reduce((a,b) => a+b)
	},
	[deleteReceipt]: (state, action) => {
		const receiptIndex = state.Order.findIndex(
			(receipt) => receipt.Buy.Buy_id === action.payload
		);
		state.Order.splice(receiptIndex, 1);
	},
    [searchReceipt]: (state, action) =>{
        return state
    }
});
