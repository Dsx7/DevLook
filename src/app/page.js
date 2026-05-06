import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <>
      {/* 
        1. THE NAVBAR
        The Navbar is fixed to the top of the screen (z-50) and sits outside 
        the main scrolling container to ensure it stays visible at all times.
      */}
      <Navbar />

      {/* 
        2. THE MAIN CONTENT AREA
        We wrap the rest of the page in a main tag. We do not need heavy 
        background colors here because we already set the global background 
        (bg-grey-100) in the layout.js file.
      */}
      <main className="flex flex-col w-full min-h-screen">
        
        {/* 
          Section 1: Hero
          Contains the large "We Create Category Leaders" text, 
          background image, and the initial fade-in animations.
        */}
        <Hero />

        {/* 
          Section 2: Client Carousel
          The scrolling marquee of client logos ("The agency behind...").
          This directly follows the hero section.
        */}
        <Carousel />

        {/* 
          Section 3: Featured Work
          The complex grid/sticky layout displaying their top case studies.
        */}
        <FeaturedWork />

        {/* 
          Future Sections:
          As you continue to build out the rest of the homepage (e.g., Services, 
          Legacy, Footer), you will simply import them at the top and drop 
          them in right here to maintain the exact vertical flow of the live site.
        */}
        
        {/* Example: <Services /> */}
        {/* Example: <Footer /> */}
        
      </main>
    </>
  );
}