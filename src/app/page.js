import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import LegacyCards from "@/components/LegacyCards";
import NewsGrid from "@/components/NewsGrid";
import ReadyText from "@/components/ReadyText";
import Footer from "@/components/Footer";
import SendUs from "@/components/SendUs";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col">
        <Hero />
        <Carousel />
        <FeaturedWork />
        <Services />
        <SendUs />
        <LegacyCards />
        <NewsGrid />
        <ReadyText />
        <Footer />
      </main>
    </>
  );
}
