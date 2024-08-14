import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Button, { buttonVariants } from "./ui/Button";

const AboutUs = () => {
    return (
        <section className="bg-orange mt-32 pb-20 pt-20">
            <div className="wrapper">
                <div className="grid grid-cols md:grid-cols-2 gap-14">
                    <div className="relative">
                        <div className="w-[28rem] h-[39rem] ">
                            <Image
                                src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="images"
                                width={500}
                                height={500}
                                priority
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="absolute top-14 -right-2 w-[28rem] h-[32rem]">
                            <Image
                                src="https://images.pexels.com/photos/3616808/pexels-photo-3616808.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="images"
                                width={500}
                                height={500}
                                priority
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-5 text-white   justify-center mt-10">
                            <span className="text-black font-medium text-xl">
                                About Us
                            </span>
                            <h2 className="-mt-2 text-3xl text-black">
                                Lorem ipsum dolor sit amet consectetur.
                            </h2>
                            <p className="text-black">
                                Aerotix is a forward-thinking airline dedicated
                                to providing seamless and convenient air travel
                                experiences. With a range of flight options,
                                Aerotix ensures every passenger enjoys top-notch
                                service, punctual departures, and smooth
                                arrivals. The airline offers user-friendly
                                booking systems and detailed travel itineraries
                                to cater to both leisure and business travelers.
                                Emphasizing efficiency and comfort, Aerotix aims
                                to make air travel accessible and enjoyable for
                                all. Whether for a quick business trip or a
                                relaxing vacation, Aerotix is committed to
                                delivering a superior flying experience.
                            </p>
                            <div className="mt-5">
                               <button className=" bg-black text-white/80 py-4 px-7 rounded-lg hover:bg-black/95 duration-300"> Discover more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default AboutUs;
