"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Data completely reordered to match your exact request & using local image paths
const caseStudies = [
  { id: 1, title: "SIXT", date: "[2023-2025]", tag: "Car rental", color: "#cb7b3a", img: "/sixt-1.webp", stat: "An extra 3m clicks regionally through SEO" },
  { id: 2, title: "Dojo - B2B", date: "[2021-2025]", tag: "Card Machines", color: "#fdd8c4", img: "/dojo-go-product-shot-1.webp", stat: "A B2B success story for Dojo card machines" },
  { id: 3, title: "Magnet Trade - B2B", date: "[2023-2024]", tag: "Kitchens", color: "#d8c4fd", img: "/Screenshot-2026-02-07-at-17.01.43.webp", stat: "A full service SEO success story 170%+ increase" },
  { id: 4, title: "Leading E Sim brand Globally", date: "[2023-2025]", tag: "Esims", color: "#cb7b3a", img: "/eSIM-Europe-p1-what-is-eSIM-2-1.webp", stat: "Increasing brand and non brand visibility UK/ES" },
  { id: 5, title: "JD Sports", date: "[2025]", tag: "Trainers", color: "#3a8ccb", img: "/maxresdefault_2025-10-22-141838_nmnu.webp", stat: "65% up YoY in clicks for JDSports FR, IT, ES" },
  { id: 6, title: "Parkdean Resorts", date: "[2019-2025]", tag: "Easter Breaks", color: "#d2b59d", img: "/easter-breaks.webp", stat: "Dominating Google and AI search" },
  { id: 7, title: "Pooky", date: "[2025]", tag: "Rechargeable Lights", color: "#39b0bd", img: "/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.webp", stat: "Driving demand for Pooky Rechargeable Lights" },
  { id: 8, title: "Parkdean Resorts", date: "[2019-2025]", tag: "UK holidays", color: "#d29dd0", img: "/1.webp", stat: "Social search and multi channel content to #1" },
  { id: 9, title: "Revolution Beauty", date: "[2022-2025]", tag: "Beauty Dupes", color: "#fecacc", img: "/Screenshot-2025-06-10-at-12.13.46.webp", stat: "Building the UK's leading beauty dupe brand" },
  { id: 10, title: "Lloyds Pharmacy", date: "[2022-23]", tag: "STI tests", color: "#60dcfb", img: "/Screenshot-2025-07-04-at-12.50.54.webp", stat: "Driving category leadership for STI tests" },
  { id: 11, title: "PrettyLittleThing", date: "[2021-2023]", tag: "Outfits", color: "#fecacc", img: "/Screenshot-2025-06-23-at-14.43.56.webp", stat: "Driving discovery for everything \"outfits\" for PLT" }
];

export default function FeaturedWork() {
  const [activeHover, setActiveHover] = useState(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  
  const sectionRef = useRef(null);
  const headingsWrapperRef = useRef(null);
  const cursorRef = useRef(null);

  // GSAP Setup inside a context
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      
      // 1. High-Performance GSAP Custom Cursor Tracker
      if (cursorRef.current) {
        let xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
        let yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });

        const moveCursor = (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);
      }

      // 2. GSAP Scroll Sync for the Left Column
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (headingsWrapperRef.current && sectionRef.current) {
          
          // Re-calculate ScrollTrigger when images load to ensure perfect sync
          setTimeout(() => { ScrollTrigger.refresh(); }, 500);

          gsap.fromTo(headingsWrapperRef.current, 
            { y: "15vh" }, 
            {
              // Dynamically calculate height so it always scrolls exactly to the bottom element
              y: () => -(headingsWrapperRef.current.scrollHeight - window.innerHeight + (window.innerHeight * 0.3)),
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top", 
                end: "bottom bottom", 
                scrub: true, 
                invalidateOnRefresh: true, // Recalculates if window resizes
              }
            }
          );
        }
      });

    }, sectionRef); // Scope to this component

    return () => ctx.revert(); // Cleanup GSAP perfectly on unmount
  }, []);

  return (
    <section id="featured-work" className="w-full pb-12 xl:pb-24 pt-10" ref={sectionRef}>
      
      {/* =========================================
          GLOBAL CUSTOM CURSOR
      ========================================= */}
      <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 z-[100] w-0 h-0 hidden lg:block">
        <div 
          className={`absolute top-0 left-0 flex items-center justify-center bg-mint rounded-full text-grey-900 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2
          ${isHoveringImage ? 'w-24 h-24 lg:w-32 lg:h-32 scale-100 opacity-100' : 'w-0 h-0 scale-0 opacity-0'}`}
        >
          {isHoveringImage && (
            <svg className="w-8 h-8 lg:w-10 lg:h-10 ml-1 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 19L19 5M19 5H8M19 5V16"></path>
            </svg>
          )}
        </div>
      </div>

      <div className="w-full px-4 md:px-7">
        
        {/* Main Background Container */}
        <div className="w-full bg-grey-900 rounded-[2.5rem] p-5 lg:px-8 xl:px-10 lg:py-0 relative grid grid-cols-12 gap-x-0 lg:gap-x-10">
          
          {/* =========================================
              LEFT COLUMN (Sticky Desktop Titles)
          ========================================= */}
          <div className="hidden lg:flex lg:flex-col items-start lg:col-span-6 sticky top-0 h-screen overflow-hidden pt-16 lg:pt-24 lg:pb-32">
            
            {/* Clean Title - No Background */}
            <h2 className="text-white text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight mb-8">
              Featured Work
            </h2>

            {/* Scrolling List Container */}
            <div className="relative flex-1 w-full overflow-hidden pr-5">
              
              {/* Fade Gradients to hide text at top/bottom of scroll area */}
              <div className="absolute top-0 left-0 w-full h-[25vh] z-20 pointer-events-none bg-gradient-to-b from-grey-900 hidden lg:flex"></div>
              <div className="absolute bottom-0 left-0 w-full h-[35vh] z-20 pointer-events-none bg-gradient-to-t from-grey-900 hidden lg:flex"></div>

              {/* The List Elements */}
              <div className="flex flex-col gap-y-2 relative z-10 2xl:gap-y-3 4xl:gap-y-5 pt-[10vh] pb-[40vh]" ref={headingsWrapperRef}>
                {caseStudies.map((work) => (
                  <div key={`title-${work.id}`} className="relative transition">
                    <Link 
                      href="#"
                      className={`flex items-start gap-x-2 transition-transform duration-300 ease-out w-max ${activeHover === work.id ? 'translate-x-4' : 'translate-x-0'}`}
                      // FIX: Only trigger active state, DO NOT trigger the custom cursor on text hover
                      onMouseEnter={() => setActiveHover(work.id)}
                      onMouseLeave={() => setActiveHover(null)}
                    >
                      {/* Title Text */}
                      <div className={`inline-flex flex-wrap text-balance relative text-left justify-start text-5xl/none lg:text-6xl/none xl:text-7xl/[0.9] 3xl:text-[7.5rem]/[0.9] font-sans-primary font-medium tracking-tight transition-colors duration-300 ${activeHover === work.id ? 'text-white' : 'text-white/30'}`}>
                        {work.title}
                      </div>
                      {/* Date Text (Natural Flex alignment next to title) */}
                      <div className={`text-xs font-medium mt-2 transition-colors duration-300 ${activeHover === work.id ? 'text-white' : 'text-white/30'}`}>
                        {work.date}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN (Scrolling Images)
          ========================================= */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 3xl:col-span-5 3xl:col-start-8 grid pt-7 pb-14">
            
            {/* Mobile Title */}
            <div className="mb-5 lg:hidden">
              <h2 className="text-white text-md/tight font-sans-primary font-medium tracking-tight">
                Featured Work
              </h2>
            </div>

            {/* The Image Cards */}
            <div className="flex flex-col gap-y-6 lg:gap-y-8">
              {caseStudies.map((work) => (
                <Link 
                  key={`card-${work.id}`} 
                  href="#" 
                  // lg:cursor-none hides the default mouse so only our custom mint cursor shows
                  className="grid group rounded-[1.5rem] overflow-hidden lg:rounded-[2rem] relative lg:cursor-none shadow-xl"
                  // KEEP custom cursor triggers here for the images
                  onMouseEnter={() => { setActiveHover(work.id); setIsHoveringImage(true); }}
                  onMouseLeave={() => { setActiveHover(null); setIsHoveringImage(false); }}
                >
                  
                  {/* Default State: Image */}
<div className="col-start-1 row-start-1 transition duration-500">
  <div className="relative w-full bg-grey-800 flex items-center justify-center py-6">
    <img
      src={work.img}
      alt={work.title}
      className="w-full h-auto object-contain max-h-[500px]"
    />
  </div>
</div>

                  {/* Top Right Tag (Disappears on hover) */}
                  <div className={`col-start-1 row-start-1 p-4 z-30 flex justify-end items-start lg:items-end lg:p-5 transition-opacity duration-300 ${activeHover === work.id ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2 px-3.5 lg:text-base">
                      <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                      <div>{work.tag}</div>
                      <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Mobile Title Overlay (Hidden on Desktop) */}
                  <div className={`col-start-1 row-start-1 p-5 z-30 relative flex justify-start items-end lg:hidden transition-opacity duration-300 ${activeHover === work.id ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="grid gap-y-1 relative z-20">
                      <div className="text-white text-sm font-bold mb-1 drop-shadow-md">{work.date}</div>
                      <div className="text-white text-[2.5rem] leading-[1] font-sans-primary font-medium tracking-tight drop-shadow-md">{work.title}</div>
                    </div>
                    <div className="absolute w-full bottom-0 left-0 h-40 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                  </div>

                  {/* =========================================
                      HOVER STATE OVERLAY (FAST CIRCLE REVEAL)
                  ========================================= */}
                  <div 
                    // Clip-path circle handles the dramatic center-bottom expanding animation
                    className={`col-start-1 row-start-1 grid-cols-12 flex flex-col items-start justify-between z-40 p-6 lg:p-10 transition-all duration-[400ms] ease-out pointer-events-none hidden lg:flex`}
                    style={{ 
                      backgroundColor: work.color, 
                      color: "#111212",
                      clipPath: activeHover === work.id ? "circle(150% at 50% 100%)" : "circle(0% at 50% 100%)"
                    }}
                  >
                    {/* Top Left Title (Size Reduced as requested) */}
                    <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none font-sans-primary font-medium tracking-tight pr-4">
                      {work.stat}
                    </div>

                    {/* Bottom Right Glassmorphism Pill */}
                    <div className="w-full flex items-end justify-between mt-auto">
                      <div className="w-8 lg:w-24"></div>
                      <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-current bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base shadow-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <div>{work.tag}</div>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                </Link>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}