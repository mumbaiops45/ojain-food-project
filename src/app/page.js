import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import CategoryBar from "./components/CategoryBar";
import FeaturedProducts from "./components/FeaturedProducts";
// import TopVendors from "./components/TopVendors";
import WhyHomemade from "./components/WhyHomemade";
import Reviews from "./components/Reviews";
import HeroSwiper from "./components/HeroSwiper";


export default function Home() {
  return (
    <main className="bg-[#F9FFF6]">

      <HeroSwiper />
      <Hero />
      <CategoryBar />
      <HowItWorks />
      <FeaturedProducts />
      {/* <TopVendors /> */}
      <WhyHomemade />
      <Reviews />

    </main>
  );
}