"use client";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const MyBooking = () => {
    const bookings = useSelector((state: RootState) => state.booking.bookings);
    const { userAndToken } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    if (!userAndToken) {
        router.push("/sign-up");
        return null;
    }

    
    const { username, email, _id } = userAndToken.user; 

    return (
        <main className="wrapper mt-32 min-h-screen">
            <h1 className="text-2xl font-bold mb-10 text-center">My Bookings</h1>
            

            {bookings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-7">
                    {bookings.map((booking, index) => (
                        <div
                            key={index}
                            className="p-7 bg-slate text-white rounded-lg shadow-xl flex flex-col gap-3"
                        > 
                                <p className="text-[16px]">
                                    <strong>Username:</strong> {username}  
                                                                    <p className="text-[15px]"> <strong>Email:</strong> {email}</p> 
                               <p className="text-[16px]"> <strong>User ID:</strong> {_id} </p>
                                   
                                   
                                </p>

                               
                                 <p className="text-[16px]">
                                    <strong>Flight ID:</strong> {booking.flightId}
                                </p>
                                 <p className="text-[16px]">
                                    <strong>Seat Number:</strong> {booking.seat_number}
                                </p>
                         
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <p>No bookings found. Start by booking a flight!</p>
                    <button
                        onClick={() => router.push("/flights")}
                        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Book a Flight
                    </button>
                </div>
            )}
        </main>
    );
};

export default MyBooking;
