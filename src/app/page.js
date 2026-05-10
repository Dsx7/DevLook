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

export const dynamic = 'force-dynamic'; // Ensures this runs per-request on the server

export default function Home() {
  // Select a random image index on the server for each unique page load
  const randomIndex = Math.floor(Math.random() * 4); // 4 background images available

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col">
        <Hero initialImageIndex={randomIndex} />
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
