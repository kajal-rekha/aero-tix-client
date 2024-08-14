"use client";

import useFetch from "@/hooks/use-fetch";
import { useRouter } from "next/navigation";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";
import Flight from "./_components/Flight";

const FlightDetailsPage = ({ params }: { params: { id: string } }) => {
    const {
        data: flight,
        error,
        isLoading
    } = useFetch(`/api/flights/${params.id}`);
    const router = useRouter();

    return (
        <main>
            {isLoading && (
                <div className="flex min-h-screen items-center justify-center">
                    <Loading isLoading={isLoading} />
                </div>
            )}

            {error && (
                <div>
                    <Error error={error.message} />
                    <Button onClick={() => router.back()}>Go Back</Button>
                </div>
            )}

            {flight && <Flight flight={flight} />}
        </main>
    );
};

export default FlightDetailsPage;
