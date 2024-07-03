"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateFlightForm = () => {
    const [form, setForm] = useState({
        flight_number: "",
        airline: "",
        origin: "",
        destination: "",
        departure_time: "",
        arrival_time: "",
        price: "",
        seats: ""
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
            const res = await fetch("/api/flights", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!res.ok) {
                throw new Error("Failed to create flight");
            }

            
            setForm({
                flight_number: "",
                airline: "",
                origin: "",
                destination: "",
                departure_time: "",
                arrival_time: "",
                price: "",
                seats: ""
            });

            router.push("/flights");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="flight_number"
                value={form.flight_number}
                onChange={handleChange}
                placeholder="Flight Number"
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="text"
                name="airline"
                value={form.airline}
                onChange={handleChange}
                placeholder="Airline"
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="text"
                name="origin"
                value={form.origin}
                onChange={handleChange}
                placeholder="Origin"
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="text"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="Destination"
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="datetime-local"
                name="departure_time"
                value={form.departure_time}
                onChange={handleChange}
                placeholder="Departure Time"
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="datetime-local"
                name="arrival_time"
                value={form.arrival_time}
                onChange={handleChange}
                placeholder="Arrival Time"
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full px-4 py-2 border rounded-lg"
            />
            <input
                type="number"
                name="seats"
                value={form.seats}
                onChange={handleChange}
                placeholder="Seats"
                className="w-full px-4 py-2 border rounded-lg"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-black rounded-lg"
            >
                Create Flight
            </button>
        </form>
    );
};

export default CreateFlightForm;
