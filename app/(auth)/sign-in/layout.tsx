import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aero Tix | Sign In",
    description: "Generated by create next app"
};

export default function SignUpLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
