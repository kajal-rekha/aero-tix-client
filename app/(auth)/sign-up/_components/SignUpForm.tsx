"use client";

import Button from "@/components/ui/Button";
import { axiosPost } from "@/lib/axiosPost";
import { login } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userType } from "@/types/userType";

interface SignUpFormData
    extends Pick<userType, "username" | "email" | "password" | "image"> {}

const SignUpForm = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
        username: "",
        email: "",
        password: "",
        image: ""
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = useCallback(
        async (e: React.SyntheticEvent) => {
            e.preventDefault();
            setIsLoading(true);

            if (!validatePassword(formData.password)) {
                toast.error(
                    "Password must contain 8+ chars, uppercase, lowercase, number and symbol"
                );
                setIsLoading(false);
                return;
            }

            const hasPermitted = formData.image;

            if (hasPermitted) {
                try {
                    console.log("Form data being sent:", formData);
                    const data = await axiosPost(
                        "/api/users/auth/register",
                        formData
                    );
                    console.log("API response:", data);

                    if (data) {
                        setIsLoading(false);
                        setFormData({
                            username: "",
                            email: "",
                            password: "",
                            image: ""
                        });
                        console.log("Form data after reset:", formData);
                        dispatch(login(data));
                        toast.success("Register successful!");
                        router.push("/");
                    } else {
                        setIsLoading(false);
                        toast.error("Registration failed. Please try again.");
                    }
                } catch (error) {
                    console.error("Error during registration:", error);
                    setIsLoading(false);
                    toast.error(
                        "An error occurred during registration. Please try again."
                    );
                }
            } else {
                setIsLoading(false);
                toast.error(
                    "Please paste an image URL from Pexels/Unsplash/Cloudinary"
                );
            }
        },
        [formData, router, dispatch]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [id]: value }));
    };

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
                {["username", "email", "password", "image"].map((field) => (
                    <div
                        className="flex flex-col items-start gap-1.5"
                        key={field}
                    >
                        <label htmlFor={field} className="text-gray">
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            value={formData[field as keyof SignUpFormData]}
                            onChange={handleChange}
                            type={
                                field === "password"
                                    ? "password"
                                    : field === "email"
                                    ? "email"
                                    : "text"
                            }
                            id={field}
                            placeholder={`Enter your ${field}`}
                            className="w-full rounded-xl border border-gray bg-gray px-3 py-4 outline-none focus:border-orange"
                        />
                    </div>
                ))}
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
                        Already have an account?
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
