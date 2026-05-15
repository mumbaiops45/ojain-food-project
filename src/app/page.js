import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import CategoryBar from "./components/CategoryBar";
import FeaturedProducts from "./components/FeaturedProducts";
import TopVendors from "./components/TopVendors";
import WhyHomemade from "./components/WhyHomemade";
import Reviews from "./components/Reviews";


export default function Home() {
  return (
    <main className="bg-[#fffdf8]">

      <Hero />
      <HowItWorks />
      <CategoryBar />
      <FeaturedProducts />
      <TopVendors />
      <WhyHomemade />
      <Reviews />

    </main>
  );
}