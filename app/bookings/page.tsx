"use client";

import { useRouter } from "next/navigation";
import { FlightType } from "@/types/flightType";
import BookingForm from "@/components/BookingForm";

const BookingPage = ({ flight }: { flight: FlightType }) => {
    const router = useRouter();

    return (
        <main>
            <div className="wrapper mb-20 max-w-2xl">
                <h1 className="text-2xl font-bold mb-5">Booking Flight</h1>
                <BookingForm flight={flight} />
                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg "
                >
                    Go Back
                </button>
            </div>
        </main>
    );
};

export default BookingPage;
