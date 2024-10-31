import SignUpForm from "./SignUpForm";
import SignUpPicture from "./SignUpPicture";

const SignUp = () => {
    return (
        <section className="sp wrapper grid grid-cols md:grid-cols-2 gap-12 mb-10"  >
            <SignUpForm />
            <SignUpPicture />
        </section>
    );
};

export default SignUp;
