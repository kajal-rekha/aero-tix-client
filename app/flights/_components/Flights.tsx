"use client";

import Button, { buttonVariants } from "@/components/ui/Button";
import useFetch from "@/hooks/use-fetch";
import Image from "next/image";
import Link from "next/link";
import FlightsCard from "./FlightsCard";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Flights = () => {
    const { data: flights, error, isLoading } = useFetch("/api/flights");
    const pathname = usePathname();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading flights.</p>;

    return (
        <section className="mt-40 ">
            <h2 className="text-center mb-10">Recommends Flights</h2>

            <div className="bg-gray/30 pt-5">
                <div className="mt-8 grid grid-cols md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-3 wrapper ">
                    {pathname === "/flights" &&
                        flights.map((flight: any) => (
                            <FlightsCard key={flight._id} flight={flight} />
                        ))}

                    {pathname === "/" &&
                        flights
                            .slice(0, 9)
                            .map((flight: any) => (
                                <FlightsCard key={flight._id} flight={flight} />
                            ))}
                </div>
            </div>

            {pathname === "/" && flights && (
                <div className="mt-20 flex justify-center">
                    <Link
                        href="/flights"
                        className={cn(buttonVariants({ variant: "ocean" }))}
                    >
                        View all flights
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Flights;
