"use client";

import Button from "@/components/ui/Button";
import { axiosPost } from "@/lib/axiosPost";
import { login } from "@/redux/features/auth/authSlice";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface SignInFormData {
    email: string;
    password: string;
    
}
const SignInForm = () => {
    const [formData, setFormData] = useState<SignInFormData>({
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();
    const dispatch = useDispatch();
    const handleSubmit = useCallback(
        async (e: React.SyntheticEvent) => {
            e.preventDefault();
            setIsLoading(true);

            const data = await axiosPost("/api/users/auth/login", formData);

            if (data) {
                setIsLoading(false);
                setFormData({
                    email: "",
                    password: ""
                });
                dispatch(login(data));
                toast.success("Login successfull!");
                router.push("/");
            } else {
                setIsLoading(false);
            }
        },
        [formData, router, dispatch]
    );

    console.log(formData);

    return (
        <div className="flex flex-col gap-10 bg-slate p-10 h-[95vh]">
            <div className="flex flex-col gap-1.5">
                <h2 className="text-orange">Welcome back!</h2>
                <p className="text-gray/90">Please login to your account</p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-5 text-lg"
            >
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
                        className="eq w-full rounded-xl border border-gray bg-gray px-3 py-4  outline-none focus:border-orange"
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
                        className="eq w-full rounded-xl border border-gray bg-gray px-3 py-4  outline-none focus:border-orange"
                    />
                </div>
                <div className="mt-5">
                    <Button variant="ocean" size="full" type="submit" isLoading={isLoading}>
                        Login
                    </Button>
                </div>
                <p>
                    <span className="text-gray/90">
                        Do not have an account?
                    </span>
                    <Link href="/sign-up" className="link-item text-orange">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignInForm;
