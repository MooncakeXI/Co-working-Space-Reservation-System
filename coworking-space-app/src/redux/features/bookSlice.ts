import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: []};

export const bookSlice = createSlice({
    name: "bookSlice",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const isDuplicate = state.bookItems.some(
                (item) =>
                    item.coworkingspace === action.payload.coworkingspace &&
                    item.startTime === action.payload.startTime &&
                    item.endTime === action.payload.endTime &&
                    item.room_number === action.payload.room_number 
            );
            if (!isDuplicate) {
                state.bookItems.push(action.payload);
            }
        },  
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems = state.bookItems.filter(
                (obj) =>
                    obj.nameLastname !== action.payload.nameLastname ||
                    obj.tel !== action.payload.tel ||
                    obj.coworkingspace !== action.payload.coworkingspace ||
                    obj.startTime !== action.payload.startTime ||
                    obj.endTime !== action.payload.endTime ||
                    obj.room_number !== action.payload.room_number
            );
        },  
    },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;