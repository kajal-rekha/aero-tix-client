import Button from "./ui/Button";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-slate hero-section pt-5">
            <div className="wrapper grid grid-cols md:grid-cols-2 gap-10 md:gap-14 sp text-gray/90">
                <div className="flex flex-col gap-5" data-aos='fade-up'
          data-aos-duration='1000'>
                    <p className="text-orange uppercase text-[14px] md:text-lg" >
                        Welcome to our AeroTix
                    </p>
                    <h1 className="leading-snug" >
                        Elevate Your Ultimate Travel Experience
                    </h1>

                    <p className="text-[15px] md:text-lg">
                        {`Experience the pinnacle of luxury travel with our
                        exclusive private jet services. From the moment you step
                        aboard, you'll be enveloped in an atmosphere of
                        sophistication and comfort. Our fleet features the
                        latest in design and technology.`}
                    </p>
                    <div className="mt-3">
                        <Button>Contact Us</Button>
                    </div>
                </div>
                <div className="mt-14 ">
                    <div className="w-full h-full airplane">
                        <Image
                            src="/images/hero.png"
                            alt="airplane"
                            width={400}
                            height={400}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
