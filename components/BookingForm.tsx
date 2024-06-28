"use client";

import { useState } from "react";
import { useRouter } from "next/router";

interface BookingFormProps {
    flightId: string ;
}

const BookingForm: React.FC<BookingFormProps> = ({ flightId }) => {
    const [seatNumber, setSeatNumber] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ flightId, seat_number: seatNumber })
            });

            if (!res.ok) {
                throw new Error("Failed to book flight");
            }

            // Redirect to bookings page or show success message
            router.push("/bookings");
        } catch (error) {
            console.error("Error booking flight:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Seat Number
                </label>
                <input
                    type="text"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md"
            >
                Book Now
            </button>
        </form>
    );
};

export default BookingForm;
