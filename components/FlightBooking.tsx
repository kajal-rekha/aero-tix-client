"use client";

import { useState } from "react";
import { Plane, Calendar, Users } from "lucide-react";

export default function FlightBookingForm() {
    const [planeType, setPlaneType] = useState("");
    const [arrivalDate, setArrivalDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [passengers, setPassengers] = useState("1");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ planeType, arrivalDate, departureDate, passengers });
    };

    return (
        <section className="w-full max-w-6xl mx-auto p-6 bg-orange rounded-xl shadow-xl -mt-10">
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
            >
                <div className="space-y-2">
                    <label
                        htmlFor="plane-type"
                        className="text-sm font-medium text-gray-300"
                    >
                        Plane Type
                    </label>
                    <div className="relative">
                        <select
                            id="plane-type"
                            value={planeType}
                            onChange={(e) => setPlaneType(e.target.value)}
                            className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-md py-2 pl-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">Select Your Plane</option>
                            <option value="private-jet">Private Jet</option>
                            <option value="charter">Charter</option>
                            <option value="helicopter">Helicopter</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <Plane className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="arrival-date"
                        className="text-sm font-medium text-gray-300"
                    >
                        Arrival Date
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            id="arrival-date"
                            value={arrivalDate}
                            onChange={(e) => setArrivalDate(e.target.value)}
                            className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-md py-2 pl-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="departure-date"
                        className="text-sm font-medium text-gray-300"
                    >
                        Departure Date
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            id="departure-date"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-md py-2 pl-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="passengers"
                        className="text-sm font-medium text-gray-300"
                    >
                        Passenger
                    </label>
                    <div className="relative">
                        <select
                            id="passengers"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            className="w-full bg-gray-800 text-gray-100 border border-gray-700 rounded-md py-2 pl-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="1">1 Passenger</option>
                            <option value="2">2 Passengers</option>
                            <option value="3">3 Passengers</option>
                            <option value="4">4 Passengers</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <Users className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-blue text-gray-900 font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                >
                    Book Now
                </button>
            </form>
        </section>
    );
}
