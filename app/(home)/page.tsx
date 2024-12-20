"use client"



//import BookingForm from "@/components/BookingForm";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Flights from "../flights/page";
import Offer from "@/components/Offer";
import Pilot from "@/components/pilots/Pilot";
import Destination from "../destination/page";
//import Blog from "../blog/page";
import ContactPage from "../contact/page";
import Blog from "@/components/Blog";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {

     useEffect(() => {
       AOS.init();
     }, []);
    return (
        <main>
            <Hero />
            <Service />
            <Flights />
            <About />
            <Offer />
            <Destination />
            <Blog />
            <Pilot />
            <ContactPage />
        </main>
    );
};

export default HomePage;
