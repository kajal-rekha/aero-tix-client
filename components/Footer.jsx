import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer mt-24">
            <div className="footer-bg bg-slate text-white ">
                <div className="wrapper sp grid grid-cols lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-8 lg:gap-6 xl:mt-12 2xl:mt-24 -mt-7 text-light/60">
                    <div className="w-full ">
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
                    <div className="w-full  hidden md:block">
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
                    <div className="w-full hidden md:block">
                        <h2 className="text-xl md:text-2xl font-semibold ">
                            More links
                        </h2>
                        <ul className="space-y-4 hidden md:block font-medium">
                             <li className="mt-3">
                                    <Link href="/seats" className="link-item">
                                        Seats
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/destination"
                                        className="link-item"
                                    >
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

                    <div className="w-full  hidden md:block">
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

                    <div className="w-full lg:mt-0 mt-1">
                        <h2 className="text-xl md:text-2xl  font-semibold  ">
                            Contact Us
                        </h2>
                        <ul className="space-y-4 font-medium ">
                            <li className=" hover:text-orange/80 eq mt-3 ">
                                Email: aerotix@gmail.com
                            </li>
                            <li className=" hover:text-orange/80 eq">
                                Phone: +1 234 567 890
                            </li>
                            <li className=" hover:text-orange/80 eq">
                                Address: No 40 Baria Sreet 133/2, NewYork, USA
                            </li>
                        </ul>

                        <div className="social-icons mt-5 flex gap-10">
                            <Link
                                href="https://www.facebook.com/anowar.kajal"
                                className="border border-light p-2 border-14px-orange rounded-full eq "
                            >
                                <FaFacebookF className="text-xl " />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/kajal-rekha-81262b264"
                                className="border border-light p-2 border-14px rounded-full eq"
                            >
                                <FaLinkedinIn className="text-xl " />
                            </Link>
                            <Link
                                href="https://twitter.com/KajalRekha14"
                                className="border border-light p-2 rounded-full eq"
                            >
                                <FaTwitter className="text-xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light/90 p-10">
                <p className="text-center text-black text-lg">
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
