import Image from "next/image";
import { Plane } from "lucide-react";
import Button from "@/components/ui/Button";
import { destinationData } from "@/data/destination";

const Destination = () => {
    return (
        <main className="mt-24">
            <div>
                <div className="wrapper px-4">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="flex flex-col gap-5 justify-center items-start  md:max-w-lg w-full">
                            <h3 className="text-left text-3xl text-slate font-medium">
                                Popular Destinations
                            </h3>
                            <p>
                                {`Explore the world’s most exciting destinations
                                with ease using Aero Tix. Whether you're
                                dreaming of the romantic streets of Paris, the
                                vibrant energy of Tokyo, or the iconic skyline
                                of New York, our air ticket booking app offers a
                                curated selection of top travel spots. Each
                                destination comes with competitive pricing,
                                real-time availability, and exclusive offers,
                                ensuring that you get the best deal for your
                                trip.`}
                            </p>
                            <Button>Discover more</Button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
                            {destinationData.map((destination) => (
                                <div
                                    key={destination.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                >
                                    <div className="group overflow-hidden ">
                                        <Image
                                            src={destination.image}
                                            alt={destination.city}
                                            width={300}
                                            height={200} priority
                                            className="w-full h-full object-cover group-hover:scale-110 duration-300"
                                        />
                                    </div>

                                    <div className="  overflow-hidden flex justify-between items-center">
                                        <div className="p-2 flex flex-col gap-1 ">
                                            <div className="flex gap-2">
                                                <h3 className="text-[16px]  font-semibold mb-2">
                                                    {destination.city}
                                                </h3>{" "}
                                                <h3 className="text-[17px]  font-bold mb-2 text-orange">
                                                    {destination.country}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 mb-2 group-hover:text-white transition-colors duration-300 text-[16px]">
                                                Price: ${destination.price}
                                            </p>
                                        </div>
                                        <div>
                                            <span>
                                                <Plane className="w-7 h-7 text-orange border border-orange p-1 rounded-full" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Destination;
