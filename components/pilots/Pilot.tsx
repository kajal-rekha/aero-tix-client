"use client";

import Image from "next/image";
import Stat from "./Stat";

const Pilot = () => {
    return (
        <div className="relative w-full h-[300px] overflow-hidden mt-32">
            <Image
                src="https://images.pexels.com/photos/1089307/pexels-photo-1089307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Aviation background"
                layout="fill"
                objectFit="cover"
                className="filter brightness-50"
            />
            <div className="relative z-10 flex justify-around items-center h-full  px-4 ">
                <Stat endValue={95} label="Professional Pilots" />
                <Stat endValue={68} label="Jet Airplanes" />
                <Stat endValue={290} label="World Airports" />
                <Stat endValue={195} label="Directions" />
            </div>
        </div>
    );
};

export default Pilot;
