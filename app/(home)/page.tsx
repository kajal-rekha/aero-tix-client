 //import BookingForm from "@/components/BookingForm";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Flights from "../flights/page";
import Offer from "@/components/Offer";
//import Pilot from "@/components/pilots/Pilot";

const HomePage = () => {
     //const flightId = "abc123"
    return (
        <main>
            <Hero />
            <Service />
            <Flights />
            <Offer />
            {/* <BookingForm flightId={flightId} /> */}
            <About />
            {/* <Pilot /> */}
        </main>
    );
};

export default HomePage;
