import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const SignInPicture = () => {
    return (
        <div className="relative h-[95vh] w-full overflow-hidden hidden md:block">
            <Image
                src="https://images.pexels.com/photos/14914173/pexels-photo-14914173.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="sign in picture"
                width={720}
                height={1280}
                priority
                className="h-full w-full object-cover"
            />

            <Overlay />
        </div>
    );
};

export default SignInPicture;
