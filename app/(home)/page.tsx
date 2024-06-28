// import BookingForm from "@/components/BookingForm";

import Hero from "@/components/Hero";
import Service from "@/components/Service";

const HomePage = () => {
    // const flightId = "abc123"
    return (
        <main>
            <Hero />
            {/* <BookingForm flightId={flightId} /> */}

            <Service/>
        </main>
    );
};

export default HomePage;
