import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { FlightType } from "@/types/flightType";
import Image from "next/image";
import Link from "next/link";

interface FlightsCardProps {
    flight: FlightType;
}
const FlightsCard: React.FC<FlightsCardProps> = ({ flight }) => {
    return (
        <div>
            <div
                key={flight._id}
                className="w-full lg:w-[30rem] lg:gap-8 xl:gap-5 xl:w-[25rem] shadow-md rounded-md overflow-hidden p-5 bg-white rounded-xl"
            >
                <div className="w-full h-[20rem] lg:h-[14rem] overflow-hidden group rounded-xl">
                    <Image
                        src={flight.image}
                        width={500}
                        height={500}
                        alt={flight.airline}
                        priority
                        className="w-full h-full object-cover group-hover:scale-125 duration-500"
                    />
                </div>

                <div className="pt-5 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">
                        Airline : {flight.airline}
                    </h3>

                    <p className="text-lg ">
                        Destination : {flight.origin} to {flight.destination}
                    </p>

                    {/* <h3 className="text-lg font-semibold">
                        {" "}
                        Flight Number : {flight.flight_number}{" "}
                    </h3>
                    <p>
                        Departure:{" "}
                        {new Date(flight.departure_time).toLocaleString()}
                    </p>
                    <p>
                        Arrival:{" "}
                        {new Date(flight.arrival_time).toLocaleString()}
                    </p>
                    <p>Seats: {flight.seats}</p> */}

                    <div className="flex gap-10">
                        <p className="text-lg">
                            Price: ${flight.price}
                        </p>
                        <p>Seats: {flight.seats}</p>
                    </div>
                    <div className="mt-2">
                        <Link
                            href={`/flight/${flight._id}`}
                            className={cn(buttonVariants({ variant: "ocean" }))}
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightsCard;
