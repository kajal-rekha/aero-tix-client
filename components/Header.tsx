"use client";

import Link from "next/link";
import Button, { buttonVariants } from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { logout } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    const session = useSelector((state: RootState) => state.auth.userAndToken);

    const dispatch = useDispatch();
    return (
        <header className="fixed left-0 right-0 top-0 z-[100] flex h-20  items-center border-b border-gray/20 bg-[#00020c] text-gray/90 backdrop-blur-xl">
            {/* NAV LEFT */}
            <nav className="wrapper flex w-full h-full items-center justify-between gap-5">
                <div>
                    <Link href="/" className="text-2xl font-semibold ">
                        AeroTix
                    </Link>
                </div>

                {/* NAV MID */}
                <ul className="md:flex hidden items-center gap-5 text-lg ">
                    <li>
                        <Link href="/" className="link-item">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/flights" className="link-item">
                            Flights
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

                {/* NAV RIGHT */}
                <div className="flex gap-5 items-center justify-center -mr-28 md:mr-0">
                    {!session?.user ? (
                        <Link
                            href="/sign-up"
                            className={buttonVariants({ variant: "ocean" })}
                        >
                            Sign in
                        </Link>
                    ) : (
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <Image
                                    src={session.user.image}
                                    alt={session.user.username}
                                    width={64}
                                    height={64}
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <Button
                                    onClick={() => {
                                        dispatch(logout());

                                        toast.success("Logout success!");
                                    }}
                                    variant="ocean"
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/*toggle button */}
                <div className="md:hidden flex ">
                    <button
                        type="button"
                        onClick={handleToggle}
                        className="inline-flex items-center justify-center focus:outline-none text-xl text-dark/90 z-[99]"
                    >
                        {toggle === true ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed top-20 left-0  h-screen w-full  transition-transform duration-500 bg-gray text-black ${
                    toggle ? "-translate-y-0" : "translate-y-full"
                }`}
            >
                <ul className="flex flex-col gap-2 p-10 ">
                    <li className="hover:bg-orange py-2 px-6 rounded-md flex items-center duration-500">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:bg-orange py-2 px-6 rounded-md flex items-center duration-500">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:bg-orange py-2 px-6 rounded-md flex items-center duration-500">
                        <Link href="/offers">Offers</Link>
                    </li>
                    <li className="hover:bg-orange py-2 px-6 rounded-md flex items-center duration-500">
                        <Link href="/destination">Destinations</Link>
                    </li>
                    <li className="hover:bg-orange py-2 px-6 rounded-md flex items-center duration-500">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="hover:bg-orange py-2 px-6 rounded-md flex items-center duration-500">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
