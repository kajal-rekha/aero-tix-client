import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aero Tix | Sign Up",
    description: "Air ticket booking app"
};

export default function SignUpLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
