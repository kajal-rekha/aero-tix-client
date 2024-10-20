"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/booking/bookingSlice";

const BookingForm = ({ flightId }: { flightId: string }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [seatNumber, setSeatNumber] = useState("");

    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const bookingData = {
            flightId,
            name,
            email,
            phone,
            seat_number: seatNumber
        };

        try {
            const res = await fetch("/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingData)
            });

            if (res.ok) {
                dispatch(addBooking(bookingData));
                router.push("/");
            } else {
                console.error("Booking failed");
            }
        } catch (error) {
            console.error("Error submitting booking:", error);
        }
    };

    return (
        <div className="mt-10">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col text-lg gap-8 p-10 mx-auto max-w-2xl bg-slate text-white rounded-lg"
            >
                <label className="flex flex-col gap-2">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="eq w-full rounded-xl border border-gray px-3 py-4 outline-none focus:border-light bg-light text-slate"
                    />
                </label>

                <label className="flex flex-col gap-2">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="eq w-full rounded-xl border border-gray px-3 py-4 outline-none focus:border-light bg-light text-slate"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                        className="eq w-full rounded-xl border border-gray px-3 py-4 outline-none focus:border-light bg-light text-slate"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    Seat Number:
                    <input
                        type="text"
                        name="seatNumber"
                        value={seatNumber}
                        onChange={(e) => setSeatNumber(e.target.value)}
                        placeholder="Seat number"
                        required
                        className="eq w-full rounded-xl border border-gray px-3 py-4 outline-none focus:border-light bg-light text-slate"
                    />
                </label>
                <button
                    type="submit"
                    className="rounded-xl py-4 px-8 text-center overflow-hidden font-medium bg-white eq text-slate mt-5"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
