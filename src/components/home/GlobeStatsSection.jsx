// src/components/home/GlobeStatsSection.js
import { ChartColumn, MagnifierPlus, Person, Star } from "@gravity-ui/icons";

const stats = [
    { icon: <Person width={20} height={20} />, value: "50K", label: "Active Jobs" },
    { icon: <ChartColumn width={20} height={20} />, value: "12K", label: "Companies" },
    { icon: <MagnifierPlus width={20} height={20} />, value: "2M", label: "Job Seekers" },
    { icon: <Star width={20} height={20} />, value: "97%", label: "Satisfaction Rate" },
];

// GlobeStatsSection.js
export default function GlobeStatsSection() {
    return (
        <section
            className="w-full flex flex-col items-center pb-16 px-4"
            style={{
                backgroundImage: "url('/images/globe.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 60%",
                backgroundSize: "100% auto",
            }}
        >
            {/* Assisting text */}
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-3xl text-center mb-48 sm:mb-56 md:mb-60 mt-30 relative z-10">
                Assisting over{" "}
                <span className="text-white font-bold">15,000 job seekers</span>{" "}
                find their dream positions.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[860px]">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col gap-2"
                    >
                        <span className="text-gray-500">{stat.icon}</span>
                        <span className="text-white font-bold text-3xl sm:text-4xl">{stat.value}</span>
                        <span className="text-gray-500 text-[13px]">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}