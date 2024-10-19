import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { FlightType } from "@/types/flightType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FlightProps {
    flight: FlightType;
}

const Flight: React.FC<FlightProps> = ({ flight }) => {
    return (
        <>
            <div className="wrapper mb-20 mt-32">

                <div className="grid grid-cols md:grid-cols-2 gap-14 items-center ">
                                    <div className="w-full overflow-hidden md:h-[32rem] mt-10 group rounded-lg">
                    <Image
                        src={flight.image}
                        width={500}
                        height={500}
                        alt={flight.airline}
                        priority
                        className="w-full h-full object-cover  group-hover:scale-110 eq"
                    />
                </div>
                    {" "}
                    <div className="flex flex-col gap-4 mt-8">
                        <h4 className="text-orange font-semibold text-xl">
                            About {flight.airline}
                        </h4>
                      
   <p>
    {flight.airline} is a state-of-the-art aircraft
    designed for long-haul flights, offering exceptional
    fuel efficiency and passenger comfort. Its innovative
    composite structure reduces weight and increases fuel savings,
    while advanced aerodynamics and new engine technology ensure a
    smooth and quiet flight. The Dreamliner&apos;s spacious and
    well-illuminated cabin, with larger windows and improved air quality.
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
                            <Link
                                href={`./bookings`}
                                className={cn(
                                    buttonVariants({
                                        variant: "ocean",
                                        size: "full"
                                    })
                                )}
                            >
                                Book Now
                            </Link>
                        </div>

                    </div>
                   
                </div>
            </div>

            
        </>
    );
};

export default Flight;
