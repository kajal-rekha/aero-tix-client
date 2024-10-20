

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Booking {
    flightId: string;
    name: string;
    email: string;
    phone: string;
    seat_number: string;
}

interface BookingState {
    bookings: Booking[];
}

const initialState: BookingState = {
    bookings: []
};

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<Booking>) => {
            state.bookings.push(action.payload);
        },
        clearBookings: (state) => {
            state.bookings = [];
        }
    }
});

export const { addBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
