import Image from "next/image";
import Link from "next/link";
import { Plane } from "lucide-react";
import Button from "./ui/Button";

const Offer = () => {
    return (
        <section className="relative h-[500px] overflow-hidden mt-32">
            <Image
                src="https://images.pexels.com/photos/26319144/pexels-photo-26319144/free-photo-of-pilot-sitting-in-airplane-cockpit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="offer"
                layout="fill"
                objectFit="cover"
                className="z-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate to-transparent z-2"></div>
            <div className="relative z-3 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl wrapper">
                    <p className="text-orange  text-lg font-semibold mb-2">
                        Special offer
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Meet our{" "}
                        <span className="text-gold-400">Care Service</span>
                    </h2>
                    <p className="text-2xl sm:text-3xl text-white mb-6">
                        for business people who appreciate time
                    </p>

                    <Button>Read more</Button>
                </div>
            </div>
            <div className="absolute bottom-4 right-4 z-20">
                <Plane className="text-white h-12 w-12 animate-pulse" />
            </div>
        </section>
    );
};

export default Offer;
