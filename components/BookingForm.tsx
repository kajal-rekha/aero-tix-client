"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FlightType } from "@/types/flightType";

interface BookingFormProps {
    flight: FlightType;
}

const BookingForm: React.FC<BookingFormProps> = ({ flight }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        passengers: 1
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    flightId: flight._id
                })
            });

            if (!res.ok) {
                throw new Error("Failed to create booking");
            }

          
            router.push("/bookings/success");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
            <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
            <input
                type="number"
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
                placeholder="Number of Passengers"
                className="w-full px-4 py-2 border rounded-lg"
                min={1}
                required
            />
            <button
                type="submit"
                className="px-4 py-2 bg-red text-dark  rounded-lg"
            >
                Book Now
            </button>
        </form>
    );
};

export default BookingForm;
