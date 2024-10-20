"use client";

import BookingForm from "@/components/bookings/BookingForm";
import { useSearchParams } from "next/navigation";

const BookingPage = () => {
    const searchParams = useSearchParams();
    const flightId = searchParams.get("flightId");

    if (!flightId) {
        return <p>Flight ID is missing</p>;
    }

    return (
        <main className="wrapper mt-36 min-h-screen ">
            <h2 className="text-2xl md:text-4xl text-center font-semibold">Fill in the form to finalize your booking</h2>
            <BookingForm flightId={flightId} />
        </main>
    );
};

export default BookingPage;
