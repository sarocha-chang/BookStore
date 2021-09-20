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
		state.push({ id: 1, ...action.payload });
	},
	[updateReceipt]: (state, action) => {
		const receiptIndex = state.Order.findIndex(
			(receipt) => receipt._id === action.payload._id,
		);
		state.Order[receiptIndex] = action.payload;
	},
	[deleteReceipt]: (state, action) => {
		const receiptIndex = state.Order.findIndex(
			(receipt) => receipt._id === action.payload,
		);
		state.Order.splice(receiptIndex, 1);
	},
    [searchReceipt]: (state, action) =>{
        return action.payload
    }
});
