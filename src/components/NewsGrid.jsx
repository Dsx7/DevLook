"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

const stories = [
  {
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    category: "News",
    author: "Carrie Rose",
    time: "2 mins",
    image: "/0B5A8137.webp",
    authorImage: "/WhatsApp-Image-2025-06-23-at-22.50.52.webp",
  },
  {
    title:
      "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they to for global expansion",
    category: "",
    author: "Ray Saddiq",
    time: "2 mins",
    image: "/WRAS-Manchester-01.webp",
    authorImage: "/WhatsApp-Image-2025-06-03-at-08.34.50.webp",
  },
  {
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    category: "",
    author: "Carrie Rose",
    time: "2 mins",
    image: "/0B5A7827.webp",
    authorImage: "/WhatsApp-Image-2025-06-23-at-22.50.52.webp",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 15L15 5M8 5H15V12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NewsGrid() {
  const mobileScrollRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (cursorRef.current) {
      let xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
      let yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });

      const moveCursor = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }
  }, []);

  const handleMobileScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth + 16;
    if (cardWidth <= 0) return;
    let index = Math.round(scrollLeft / cardWidth);
    setActiveCardIndex(Math.min(Math.max(index, 0), stories.length - 1));
  };

  return (
    <section
      id="news"
      className="px-4 pb-[4.5rem] pt-6 sm:px-7 lg:pb-24 lg:cursor-none"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
    >
      {/* GLOBAL CUSTOM CURSOR FOR THIS SECTION */}
      <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 z-[100] w-0 h-0 hidden lg:block">
        <div
          className={`absolute top-0 left-0 flex items-center justify-center bg-mint rounded-full text-grey-900 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2
          ${isHoveringSection ? 'w-24 h-24 lg:w-32 lg:h-32 scale-100 opacity-100' : 'w-0 h-0 scale-0 opacity-0'}`}
        >
          {isHoveringSection && (
            <ArrowIcon className="w-8 h-8 lg:w-10 lg:h-10 ml-1 mb-1" />
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 
            className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-x-3 gap-y-1 text-[4rem] font-medium leading-[0.9] tracking-tight text-grey-900 sm:text-[5rem] lg:text-[6.5rem] lg:cursor-auto relative z-10"
            onMouseEnter={() => setIsHoveringSection(false)}
            onMouseLeave={() => setIsHoveringSection(true)}
          >
            <div className="flex items-center gap-x-3">
              <span>What's</span>
              <span className="relative inline-block h-[0.6em] w-[0.6em] overflow-hidden rounded-[0.18em] bg-black/10">
                <img src="/maxresdefault_2025-10-22-141838_nmnu.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
              </span>
            </div>
            <span>New</span>
          </h2>

          <Link
            href="#footer"
            className="group hidden lg:inline-flex w-max items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold tracking-tight text-grey-900 shadow-[0_10px_30px_rgba(17,18,18,0.06)] overflow-hidden transition-all duration-300 lg:hover:scale-[1.03] lg:mt-6 lg:cursor-pointer relative z-10"
            onMouseEnter={() => setIsHoveringSection(false)}
            onMouseLeave={() => setIsHoveringSection(true)}
          >
            <div className="relative flex items-center justify-center overflow-hidden">
              <span className="flex items-center gap-x-1.5 transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] lg:group-hover:-translate-y-[150%]">
                Explore More Thoughts <span className="text-[10.5px] mt-0.5 font-bold">↗</span>
              </span>
              <span className="absolute inset-0 flex items-center justify-center gap-x-1.5 transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[150%] lg:group-hover:translate-y-0">
                Explore More Thoughts <span className="text-[10.5px] mt-0.5 font-bold">↗</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-7 h-px bg-grey-200" />

        <div className="mt-9">
          <div
            ref={mobileScrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:pb-0 lg:flex-none lg:snap-none"
            onScroll={handleMobileScroll}
          >
            {stories.map((story, index) => (
              <Link key={story.title} href="#news" className="group block w-full shrink-0 snap-center lg:w-auto lg:shrink">
                <article>
                  <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_18px_50px_rgba(17,18,18,0.06)]">
                    {story.category ? (
                      <div className="absolute left-5 top-5 z-10 rounded-full bg-white/20 px-3 py-2 text-sm font-medium tracking-tight text-white backdrop-blur-md">
                        {story.category}
                      </div>
                    ) : null}

                    <div className="relative aspect-[1/1.02] overflow-hidden rounded-[1.7rem] bg-grey-100 transform-gpu" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover transition-transform duration-700"
                      />
                      <div className="absolute inset-0 z-20 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] [clip-path:circle(0%_at_50%_100%)] lg:group-hover:[clip-path:circle(150%_at_50%_100%)] backdrop-blur-md bg-white/20 rounded-[1.7rem]"></div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1.5 text-sm font-medium tracking-tight text-grey-300">
                      <span className="inline-flex h-6 w-6 overflow-hidden rounded-full">
                        <img src={story.authorImage} alt={story.author} className="h-full w-full object-cover" />
                      </span>
                      <span>{story.author}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium tracking-tight text-grey-300">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M10 5.5V10L13 12M17 10A7 7 0 113 10a7 7 0 0114 0z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{story.time}</span>
                    </div>
                  </div>

                  <h3 className="mt-3 max-w-[92%] text-[1.7rem] font-medium leading-[0.92] tracking-tight text-grey-900 sm:text-[1.8rem] sm:max-w-[85%] lg:max-w-full lg:text-[2.15rem]">
                    {story.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-4 h-[3px] w-full bg-grey-200 overflow-hidden rounded-full lg:hidden">
            <div
              className="h-full bg-grey-900 transition-all duration-300 rounded-full"
              style={{ width: `${((activeCardIndex + 1) / stories.length) * 100}%` }}
            />
          </div>

          <div className="mt-8 lg:hidden w-full">
            <Link
              href="#footer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-grey-200 bg-white px-8 py-4 text-[15px] font-semibold tracking-tight text-grey-900 shadow-[0_10px_30px_rgba(17,18,18,0.06)] active:scale-95 transition-transform"
            >
              Explore More Thoughts <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
