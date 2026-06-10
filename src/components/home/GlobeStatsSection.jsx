// src/components/home/GlobeStatsSection.js
import { ChartColumn, MagnifierPlus, Person, Star } from "@gravity-ui/icons";

const stats = [
  { icon: <Person width={20} height={20} />, value: "50K", label: "Active Jobs" },
  { icon: <ChartColumn width={20} height={20} />, value: "12K", label: "Companies" },
  { icon: <MagnifierPlus width={20} height={20} />, value: "2M", label: "Job Seekers" },
  { icon: <Star width={20} height={20} />, value: "97%", label: "Satisfaction Rate" },
];

export default function GlobeStatsSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center pb-16 px-4"
      style={{
        backgroundImage: "url('/images/globe.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 60%",
        backgroundSize: "100% auto",
      }}
    >
      {/* Gradient blend overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            linear-gradient(to bottom, #0d0d0d 0%, transparent 15%),
            linear-gradient(to top, #0d0d0d 0%, transparent 15%),
            linear-gradient(to right, #0d0d0d 0%, transparent 15%),
            linear-gradient(to left, #0d0d0d 0%, transparent 15%)
          `,
        }}
      />

      {/* Assisting text */}
      <p className="relative z-10 text-gray-200 leading-relaxed text-sm sm:text-base md:text-3xl text-center mb-48 sm:mb-56 md:mb-60 mt-30">
        Assisting over{" "}
        <span className="text-white font-bold">15,000 job seekers</span>{" "}
        find their dream positions.
      </p>

      {/* Stats Cards */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[860px]">
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