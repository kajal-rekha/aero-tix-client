// import BookingForm from "@/components/BookingForm";

import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Flights from "../flights/page";

const HomePage = () => {
    // const flightId = "abc123"
    return (
        <main>
            <Hero />
            <Service />
            <Flights />
            {/* <BookingForm flightId={flightId} /> */}
        </main>
    );
};

export default HomePage;
