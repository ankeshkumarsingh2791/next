import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestinomialCard from "@/components/TestinomialCard";
import Upcomingweb from "@/components/Upcomingweb";

import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02">
      <HeroSection />
      <Features />
      <WhyChooseUs />
      <TestinomialCard />
      {/* <Upcomingweb /> */}
      <Upcomingweb />
      <Instructors />
      <Footer />
      
    </div>
  );
}
