import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { FlightType } from "@/types/flightType";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

interface FlightProps {
    flight: FlightType;
}

const Flight: React.FC<FlightProps> = ({ flight }) => {
    const router = useRouter();
    const { userAndToken } = useSelector((state: RootState) => state.auth);

    const handleBooking = () => {
        if (userAndToken) {
            router.push(`/bookings?flightId=${flight._id}`);
        } else {
            router.push("/sign-up");
        }
    };
    return (
        <div className="wrapper mb-20 mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                <div className="w-full overflow-hidden md:h-[32rem] mt-10 group rounded-lg">
                    <Image
                        src={flight.image}
                        width={500}
                        height={500}
                        alt={flight.airline}
                        priority
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <h4 className="text-orange-500 font-semibold text-xl">
                        About {flight.airline}
                    </h4>
                    <p>
                        {flight.airline} is a state-of-the-art aircraft designed
                        for long-haul flights, offering exceptional fuel
                        efficiency and passenger comfort...
                    </p>
                    <p>
                        <strong>Airline:</strong> {flight.airline}
                    </p>
                    <p>
                        <strong>Origin:</strong> {flight.origin}
                    </p>
                    <p>
                        <strong>Destination:</strong> {flight.destination}
                    </p>
                    <p>
                        <strong>Price:</strong> ${flight.price}
                    </p>
                    <p>
                        <strong>Seats:</strong> {flight.seats}
                    </p>
                    <div className="mt-5">
                        <button
                            onClick={handleBooking}
                            className={cn(buttonVariants({ variant: "ocean" }))}
                        >
                            Book now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flight;
