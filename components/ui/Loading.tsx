import { MoonLoader } from "react-spinners";

interface LoadingProps {
    isLoading: boolean;
}
const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
    return (
        <div className="flex justify-center">
            <MoonLoader
                color="rgb(221, 188, 136)"
                loading={isLoading}
                size={24}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loading;
