import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aero Tix | Flight Details Page",
    description: "Air ticket booking app"
};

export default function AboutPageLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
