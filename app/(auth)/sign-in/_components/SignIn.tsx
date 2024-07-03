import SignInForm from "./SignInForm";
import SignInPicture from "./SignInPicture";

const SignIn = () => {
    return (
        <section
            className="sp wrapper grid grid-cols md:grid-cols-2 gap-12 mb-20"
        >
            <SignInForm />
            <SignInPicture />
        </section>
    );
};

export default SignIn;
