import { useCountAnimation } from "@/hooks/useCountAnimation";
import { useEffect, useRef } from "react";

interface StatProps {
    endValue: number;
    label: string;
}

const Stat: React.FC<StatProps> = ({ endValue, label }) => {
    const { count, setIsVisible } = useCountAnimation(endValue);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [setIsVisible]);

    return (
        <div ref={ref} className="text-center  flex gap-5 stat-item">
            <div>
                <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {count}
                </div>
                <div className=" text-orange">{label}</div>
            </div>
            <div className="border-orange border-r w-full ml-10 border-dashed h-20 hidden md:block"></div>
        </div>
    );
};

export default Stat;
