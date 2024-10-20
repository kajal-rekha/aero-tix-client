"use client";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const BookingData = () => {
    const bookings = useSelector((state: RootState) => state.booking.bookings);
    const { userAndToken } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    if (!userAndToken) {
        router.push("/sign-up");
        return null;
    }
    return (
        <main className="wrapper mt-32 min-h-screen">
            <h1 className="text-2xl font-bold mb-10 text-center">
                My Bookings
            </h1>
            {bookings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                    {bookings.map((booking, index) => (
                        <div
                            key={index}
                            className="p-4 bg-slate text-white rounded-lg shadow-md"
                        >
                            <p>
                                <strong>Flight ID:</strong> {booking.flightId}
                            </p>
                            {/* <p>
                                <strong>Name:</strong> {booking.name}
                            </p>
                            <p>
                                <strong>Email:</strong> {booking.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {booking.phone}
                            </p> */}
                            <p>
                                <strong>Seat Number:</strong>{" "}
                                {booking.seat_number}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No bookings found.</p>
            )}
        </main>
    );
};

export default BookingData;
