"use client";

import useFetch from "@/hooks/use-fetch";
import Image from "next/image";
import Link from "next/link";

const Flights = () => {
    const { data: flights, error, isLoading } = useFetch("/api/flights");

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading flights.</p>;

    return (
        <div className="mt-40">
            <h2>Recommends Flights</h2>

            <div className="mt-8">
                {flights.map((flight: any) => (
                    <div key={flight._id} className="p-4 border-b">
                        <Image
                            src={flight.image}
                            width={500}
                            height={500}
                            alt={flight.airline}
                        />
                        <h2 className="text-lg font-semibold">
                            {flight.flight_number} - {flight.airline}
                        </h2>
                        <p>
                            {flight.origin} to {flight.destination}
                        </p>
                        <p>
                            Departure:{" "}
                            {new Date(flight.departure_time).toLocaleString()}
                        </p>
                        <p>
                            Arrival:{" "}
                            {new Date(flight.arrival_time).toLocaleString()}
                        </p>
                        <p>Price: ${flight.price}</p>
                        <p>Seats: {flight.seats}</p>
                        <Link
                            href={`/flight/${flight._id}`}
                            className="mt-2 px-4 py-2 bg-blue-500 text-black rounded inline-block"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Flights;
