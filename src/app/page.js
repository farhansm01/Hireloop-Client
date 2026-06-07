// src/app/page.js
import BannerSection from "@/components/home/BannerSection";
// import GlobeStatsSection from "@/components/home/GlobeStatsSection";

export default function HomePage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <BannerSection />
      {/* <GlobeStatsSection /> */}
    </main>
  );
}