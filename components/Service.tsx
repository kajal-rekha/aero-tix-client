"use client";

import { useState } from "react";
import { Services } from "@/data/service";
import Overlay from "./ui/Overlay";
import Button from "./ui/Button";


const Service = () => {
    const [currentServiceId, setCurrentServiceId] = useState<number>(1);

    const currentService = Services.find(
        (service) => service.id === currentServiceId
    );

    return (
        <section className="mt-32 ">
            <div className="wrapper">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="service-left relative ">
                        <Overlay />
                        <div className="absolute text-gray flex flex-col gap-5 p-10 w-full" >
                            <p className="text-[15px] font-bold" data-aos='fade-right'
          data-aos-duration='1000'>
                                {" "}
                                <span className="text-orange">#</span> Executive
                                Air Charter
                            </p>
                            <p className="text-2xl font-medium" data-aos='fade-right'
          data-aos-duration='1200'>
                                Find the best service for you
                            </p>
                            <ul className="flex flex-col gap-5 items-center justify-center mt-10">
                                {Services.map((service) => (
                                    <li
                                        key={service.id}
                                        className="w-full text-center " data-aos='fade-right'
          data-aos-duration='1500'
                                    >
                                        <button
                                            onClick={() =>
                                                setCurrentServiceId(service.id)
                                            }
                                            className="flex flex-col items-center gap-1"
                                        >
                                            <div className="flex gap-5 font-bold">
                                                <span className="text-orange">{`0${service.id}`}</span>

                                                <span className="text-sm text-gray-500 text-wrap hover:text-orange duration-500 cursor-pointer">
                                                    {service.airline}
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="service-right relative ">
                        <Overlay />
                        <div className="absolute p-10 mt-24">
                            {currentService && (
                                <div className="flex flex-col gap-3 text-gray" data-aos='fade-up'
          data-aos-duration='1000'>
                                    <h3 className="text-orange">
                                        {currentService.title}
                                    </h3>
                                    <p className="text-[17px]">
                                        {currentService.description}
                                    </p>
                                    <div className="mt-5">
                                        <Button>Book Now</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
