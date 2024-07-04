export type userType = {
    _id: string;
    username: string;
    email: string;
    password: string;
    image: string;
    role: "user" | "admin";
    createdAt: string;
    updatedAt: string;
    __v: number;
};
