import Image from "next/image";
import { Plane } from "lucide-react";
import Button from "./ui/Button";

const Offer = () => {
    return (
        <section className="relative h-[500px] overflow-hidden mt-32">
            <Image
                src="https://images.unsplash.com/photo-1587893904933-5b23fefaea6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="offer"
                layout="fill"
                objectFit="cover"
                priority
                className="z-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate to-transparent z-2"></div>
            <div className="relative z-3 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="wrapper">
                    <div className="md:max-w-3xl flex flex-col gap-2" >
                        <span className="text-orange  text-[15px]  md:text-lg font-semibold mb-2" data-aos='fade-up'
          data-aos-duration='1000'>
                            Special offer
                        </span>
                        <h2 className="text-2xl md:text-3xl  font-bold text-white mb-4" data-aos='fade-up'
          data-aos-duration='1200'>
                            Take advantage of this exclusive offer to save 20%
                            on all flights
                        </h2>
                        <p className=" text-xl md:text-2xl  text-white mb-6" data-aos='fade-up'
          data-aos-duration='1400'>
                            Our premium service ensures a smooth and efficient
                            booking process, tailored to busy professionals who
                            value their time.
                        </p>

                        <div data-aos='fade-up'
          data-aos-duration='1500'>
                            <Button>Read more</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 right-4 ">
                <Plane className="text-blue h-10 w-10 animate-pulse" />
            </div>
        </section>
    );
};

export default Offer;
