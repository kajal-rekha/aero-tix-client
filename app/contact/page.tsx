"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";

import emailjs from "@emailjs/browser";
import SectionTittle from "@/components/SectionTittle";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    const [formData, setFormData] = useState<{
        fullName: string;
        email: string;
        message: string;
    }>({ fullName: "", email: "", message: "" });

    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        //emailjs integration
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                formRef.current as HTMLFormElement,
                process.env.NEXT_PUBLIC_USER_ID as string
            )
            .then(
                () => {
                    toast.success("Your message sent!");
                    setFormData({
                        fullName: "",
                        email: "",
                        message: ""
                    });
                },
                () => {
                    toast.error("Failed, please try again later!");
                }
            );
        console.log(formData);
    };

    return (
        <main className="wrapper mt-24">
            <SectionTittle h3="Get In Touch" />

            <div className="grid grid-cols md:grid-cols-2 gap-14 mt-14">
                <div>
                    <div className="flex flex-col gap-3">
                        <span className="text-orange font-semibold" data-aos='fade-up'
          data-aos-duration='1000'>
                            {" "}
                            Talk to us
                        </span>

                        <h3 className="text-4xl font-medium" data-aos='fade-up'
          data-aos-duration='1000'>
                            Any Question? <br /> Fell Free to Contact
                        </h3>

                        <p className="max-w-lg" data-aos='fade-up'
          data-aos-duration='1000'>
                            With a wide variety of popular aircraft, charter
                            flights offer the most efficient and comfortable way
                            to travel in style.
                        </p>
                        <div className="flex flex-col gap-5 mt-3" data-aos='fade-up'
          data-aos-duration='1000'>
                            <div className="flex items-center">
                                <Phone className="w-9 h-9 text-white rounded-full p-2 mr-2 bg-orange" />
                                <Link href="tel:+11234567890">
                                    +1 (123) 456-7890
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-9 h-9 text-white rounded-full p-2 mr-2 bg-orange" />
                                <Link href="mailto:info@airbooking.com">
                                    info@aerotix.com
                                </Link>
                            </div>

                            <div className="flex items-center">
                                <MapPin className="w-9 h-9 text-white rounded-full p-2 mr-2 bg-orange" />
                                <span>
                                    123 Airport Road, City, Country 12345
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-9 h-9 text-white rounded-full p-2 mr-2 bg-orange" />
                                <span>Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-orange rounded-lg py-3 px-5 lg:px-10" data-aos='fade-up'
          data-aos-duration='1000'>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="contact-form flex flex-col text-lg gap-8 py-10  mx-auto "
                    >
                        <div className="form-control flex flex-col gap-2">
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        fullName: e.target.value
                                    })
                                }
                                required
                                className="eq w-full rounded-xl border border-gray px-3 py-4 outline-none focus:border-light bg-light"
                            />
                        </div>
                        <div className="form-control flex flex-col gap-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })
                                }
                                required
                                className="eq w-full rounded-xl border border-gray px-3 py-4 outline-none focus:border-light bg-light "
                            />
                        </div>

                        <div className="form-control flex flex-col gap-2">
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value
                                    })
                                }
                                className="eq w-full rounded-xl border border-gray px-3 py-5 outline-none focus:border-light bg-light resize-none"
                            />
                        </div>
                        <div className="submit  rounded-xl py-4 px-8 text-center overflow-hidden  font-medium  bg-white eq">
                            <button
                                role="link"
                                type="submit"
                                className=" text-dark/80 uppercase"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;
