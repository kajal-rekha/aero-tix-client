import Image from "next/image";
import Button from "./ui/Button";

const About = () => {
    return (
        <section className="mt-32 ">-
            <div className="wrapper">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-16">
                    <div className="relative" data-aos='fade-right'
          data-aos-duration='1000'>
                        <div className=" w-[18rem] md:w-[28rem] h-[28rem] md:h-[39rem] ">
                            <Image
                                src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="images"
                                width={500}
                                height={500}
                                priority
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="absolute top-16 right-0 w-[13rem] md:w-[25rem] h-[20rem] md:h-[31rem]">
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

                    <div className="flex flex-col gap-5 justify-center mt-10" data-aos='fade-left'
          data-aos-duration='1000'>
                        <h3 className="font-semibold text-xl">
                            <span className="text-orange"> Why </span>
                            Choose Us
                        </h3>
                        <h2 className="font-semibold text-xl md:text-3xl">
                            Trust in Aerotix for consistent, dependable service
                            on every flight.
                        </h2>
                        <p className="text-[14px] md:text-lg">
                            Aero-Tix is your ultimate solution for seamless air
                            ticket booking. Designed with user convenience in
                            mind, our platform offers a smooth and efficient
                            booking process, ensuring you find the best flights
                            at the best prices. Whether you are planning a quick
                            getaway or a long-haul journey, Aero-Tix makes it
                            easy to book your flights with confidence.
                        </p>

                        <div>
                            <ul className="flex flex-col gap-4 mt-2">
                                <li className=" flex items-center gap-5 text-[14px] md:text-lg">
                                    <span className="bg-orange w-3 h-3 rotate-[50deg]"></span>
                                    Receive top-notch service at every stage of
                                    your journey.
                                </li>
                                <li className="flex items-center gap-5 [14px] md:text-lg">
                                    <span className=" bg-orange w-3 h-3 rotate-[50deg]"></span>
                                    Advanced measures to ensure your safety and
                                    comfort.
                                </li>
                                <li className=" flex items-center gap-5 [14px] md:text-lg">
                                    <span className=" bg-orange w-3 h-3 rotate-[50deg]"></span>
                                    Easy access to domestic and international
                                    destinations.
                                </li>
                                <li className=" flex items-center gap-5 text-[14px] md:text-lg">
                                    <span className=" bg-orange w-3 h-3 rotate-[50deg]"></span>
                                    Our commitment to getting you to your
                                    destination on time.
                                </li>
                            </ul>
                        </div>

                        <div className="mt-2" data-aos='fade-up'
          data-aos-duration='1000'>
                            <Button>Discover more</Button>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default About;
