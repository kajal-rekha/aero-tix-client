import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const SignUpPicture = () => {
    return (
        <div className="relative h-full w-full overflow-hidden hidden md:block" data-aos='fade-left'
          data-aos-duration='1000'>
            <Image
                src="https://images.pexels.com/photos/21775999/pexels-photo-21775999/free-photo-of-seats-and-corridor-in-airplane.jpeg?auto=compress&cs=tinysrgb&w=600"
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

export default SignUpPicture;
