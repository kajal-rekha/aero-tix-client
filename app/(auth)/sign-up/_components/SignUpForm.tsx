"use client";

import Button from "@/components/ui/Button";
import { axiosPost } from "@/lib/axiosPost";
import { login } from "@/redux/features/auth/authSlice";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    image: string;
}
const SignUpForm = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
        name: "",
        email: "",
        password: "",
        image: ""
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();
    const dispatch = useDispatch();
    const handleSubmit = useCallback(
        async (e: React.SyntheticEvent) => {
            e.preventDefault();
            setIsLoading(true);
            const hasPermitted = formData.image;

            if (hasPermitted) {
                const data = await axiosPost(
                    "/api/users/auth/register",
                    formData
                );

                if (data) {
                    setIsLoading(false);
                    setFormData({
                        name: "",
                        email: "",
                        password: "",
                        image: ""
                    });
                    dispatch(login(data));
                    toast.success("Register successfull!");
                    router.push("/");
                } else {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
                toast.error(
                    "Please paste an image url from pexels/unsplash/cloudinary"
                );
            }
        },
        [formData, router, dispatch]
    );

    console.log(formData);

    return (
        <div className="flex flex-col gap-10 bg-slate p-10">
            <div className="flex flex-col gap-1.5">
                <h2 className="text-orange">Create an account!</h2>
                <p className="text-gray/90">
                    Kindly provide your information to complete the
                    registration.
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-5 text-lg"
            >
                <div className="flex flex-col items-start gap-1.5">
                    <label htmlFor="email" className="text-gray">
                        Name
                    </label>
                    <input
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        type="text"
                        id="name"
                        placeholder="kajal"
                        className="eq w-full rounded-xl border border-gray bg-gray px-3 py-4 outline-none focus:border-orange"
                    />
                </div>

                <div className="flex flex-col items-start gap-1.5">
                    <label htmlFor="email" className="text-gray">
                        Email address
                    </label>
                    <input
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        type="email"
                        id="email"
                        placeholder="hello@example.com"
                        className="eq w-full rounded-xl border border-gray bg-gray px-3 py-4 outline-none focus:border-orange"
                    />
                </div>
                <div className="flex flex-col items-start gap-1.5">
                    <label htmlFor="password" className="text-gray">
                        Password
                    </label>
                    <input
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value
                            })
                        }
                        type="password"
                        id="password"
                        placeholder="Write your password"
                        className="eq w-full rounded-xl border border-gray bg-gray px-3 py-4 outline-none focus:border-orange"
                    />
                </div>

                <div className="flex flex-col items-start gap-1.5">
                    <label htmlFor="password" className="text-gray">
                        Image
                    </label>
                    <input
                        value={formData.image}
                        onChange={(e) =>
                            setFormData({ ...formData, image: e.target.value })
                        }
                        type="url"
                        id="image"
                        placeholder="Past your image url from pexels/unsplash/cloudinary"
                        className="eq w-full rounded-xl border border-gray bg-gray px-3 py-4 outline-none focus:border-orange"
                    />
                </div>

                <div className="mt-5">
                    <Button
                        variant="ocean"
                        size="full"
                        type="submit"
                        isLoading={isLoading}
                    >
                        Register
                    </Button>
                </div>
                <p>
                    <span className="text-gray/90">
                        Allready have an account?
                    </span>
                    <Link href="/sign-in" className="link-item text-orange">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignUpForm;
