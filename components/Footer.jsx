import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="footer mt-24">
            <div className="footer-bg bg-slate text-white ">
                <div className="wrapper sp grid grid-cols xl:grid-cols-5 gap-7 md:gap-8 lg:gap-6 xl:mt-12 2xl:mt-24 -mt-7 text-light/60">
                    <div className="w-full " data-aos='fade-up'
          data-aos-duration='1000'>
                        <Link
                            href="/"
                            className="text-xl lg:text-3xl font-semibold text-orange" 
                        >
                            AeroTix
                        </Link>
                        <p className="mt-5 w-full leading-8 lg:text-lg">
                            Aerotix is a forward-thinking airline dedicated to
                            providing seamless and convenient air travel
                            experiences.
                        </p>
                    </div>
                    <div className="w-full " data-aos='fade-up'
          data-aos-duration='1000'>
                        <h2 className="text-xl md:text-2xl font-semibold ">
                            Quick links
                        </h2>
                        <ul className="flex flex-col space-y-4 font-medium">
                            <li className="mt-3">
                                <Link
                                    href="/"
                                    className="link-item hover:text-orange/80 eq"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="link-item">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/offers" className="link-item">
                                    Offers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full " data-aos='fade-up'
          data-aos-duration='1000'>
                        <h2 className="text-xl md:text-2xl font-semibold ">
                            More links
                        </h2>
                        <ul className="space-y-4  font-medium">
                            <li className="mt-3">
                                <Link href="/seats" className="link-item">
                                    Seats
                                </Link>
                            </li>

                            <li>
                                <Link href="/destination" className="link-item">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="link-item">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="link-item">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full " data-aos='fade-up'
          data-aos-duration='1000'>
                        <h2 className="text-xl md:text-2xl font-semibold ">
                            Services
                        </h2>
                        <ul className="flex flex-col space-y-4  md:block font-medium">
                            <li className=" hover:text-orange/80 eq mt-3 ">
                                Customer Support
                            </li>
                            <li className=" hover:text-orange/80 eq ">
                                Baggage Information
                            </li>
                            <li className=" hover:text-orange/80 eq">
                                Flight Search and Booking
                            </li>

                            <li className=" hover:text-orange/80 eq">
                                Travel Insurance
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2" data-aos='fade-up'
          data-aos-duration='1000'>
                        <h2 className="text-xl md:text-2xl font-semibold ">
                            Newsletter
                        </h2>
                        <p className="text-[1rem] font-medium">
                            Subscribe to our newsletter for the latest offers
                            and updates.
                        </p>
                        <form className="flex mt-2">
                            <input
                                name="email"
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 w-full rounded-l-md focus:outline-none"
                            />
                            <button
                                role="link"
                                type="submit"
                                className="bg-orange  text-slate px-4 py-2 rounded-r-md hover:bg-orange/90 transition duration-300 "
                            >
                                Subscribe
                            </button>
                        </form>

                        <div className="social-icons mt-5 flex gap-6">
                            <Link
                                href="https://www.facebook.com/anowar.kajal"
                                className="border border-orange bg-orange text-slate p-2 rounded-full eq "
                            >
                                <Facebook className="w-5 h-5 text-white  duration-300" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/kajal-rekha-81262b264"
                                className="border border-orange bg-orange text-slate p-2 rounded-full eq "
                            >
                                <Linkedin className="w-5 h-5 text-white  duration-300" />
                            </Link>
                            <Link
                                href="https://twitter.com/KajalRekha14"
                                className="border border-orange bg-orange text-slate p-2 rounded-full eq "
                            >
                                <Twitter className="w-5 h-5 text-white duration-300" />
                            </Link>
                            <Link
                                href="https://instagram.com/KajalRekha14"
                                className="border border-orange bg-orange text-slate p-2 rounded-full eq "
                            >
                                <Instagram className="w-5 h-5 text-white duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate  p-5 md:p-10 border-t border-white/90" >
                <p className="text-center text-white/90 text-[13px] md:text-lg">
                    &copy; {new Date().getFullYear()}{" "}
                    <Link href="/" className="link-item">
                        AeroTix
                    </Link>{" "}
                    . All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
