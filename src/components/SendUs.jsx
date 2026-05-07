"use client";
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

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

export default function SendUs() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const marqueeWrapperRef = useRef(null);
  const marqueeContentRef = useRef(null);

  // Pool of images to randomly select from
  const ALL_IMAGES = [
    "/Screenshot-2025-06-23-at-14.43.56.webp",
    "/Screenshot-2025-06-23-at-22.39.35.webp",
    "/WhatsApp-Image-2025-06-03-at-08.34.50.webp",
    "/0B5A6875.webp",
    "/IMG_5079.webp",
    "/data.webp",
    "/Screenshot-2025-06-23-at-23.16.14.webp"
  ];

  // Pick random images only once when component mounts
  const randomImages = useMemo(() => {
    let shuffled = [...ALL_IMAGES].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx = gsap.context(() => {
      // 1. GSAP Marquee (Infinite scroll)
      if (marqueeWrapperRef.current && marqueeContentRef.current) {
        gsap.to(marqueeContentRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 35, // Adjust this to change scrolling speed
          ease: "none"
        });
      }

      // 2. Custom Cursor for Desktop (Send Us Your Brief Button)
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
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
      });
    });

    return () => ctx.revert();
  }, []);

  const marqueeItems = [
    { text: "Chasing Consumers", img: randomImages[0] },
    { text: "Not Algorithms", img: randomImages[1] },
    { text: "Chasing Consumers", img: randomImages[2] },
    { text: "Not Algorithms", img: randomImages[3] },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden pb-10 pt-14 sm:mt-10 lg:mt-12 lg:pb-16 cursor-default lg:cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => {
        if (window.innerWidth >= 1024) {
          window.location.href = "#footer";
        }
      }}
    >
      
      {/* GLOBAL CUSTOM CURSOR (Send Us Your Brief) */}
      <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 z-[100] w-0 h-0 hidden lg:block">
        <div 
          className={`absolute top-0 left-0 flex items-center justify-center bg-mint rounded-full text-grey-900 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 whitespace-nowrap shadow-[0_18px_45px_rgba(17,18,18,0.08)] pointer-events-none
          ${isHovering ? 'scale-100 opacity-100 px-6 py-4' : 'scale-0 opacity-0 px-0 py-0'}`}
        >
          <span className="text-base font-semibold tracking-tight mr-2">Send Us Your Brief</span>
          <ArrowIcon className="h-4 w-4" />
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex items-center w-full" ref={marqueeWrapperRef}>
        
        {/* Double width container to hold 2x the content for seamless loop */}
        <div className="flex shrink-0 w-max items-center" ref={marqueeContentRef}>
          
          {/* Loop twice to make sure xPercent: -50 seamlessly loops */}
          {[1, 2].map((setIndex) => (
            <div key={`set-${setIndex}`} className="flex shrink-0 items-center gap-x-4 px-2 lg:gap-x-10 lg:px-5">
              {marqueeItems.map((item, i) => (
                <React.Fragment key={`m${setIndex}-${i}`}>
                  <h2 className="text-[4.5rem] md:text-[5.5rem] lg:text-[8rem] xl:text-[11.5rem] 2xl:text-[13rem] leading-[0.9] font-sans-primary font-medium tracking-tight text-grey-900 whitespace-nowrap pb-2 lg:pb-4">
                    {item.text}
                  </h2>
                  <div className="shrink-0 rounded-[1.25rem] lg:rounded-[2rem] overflow-hidden w-[25vw] h-[15vw] md:w-[15vw] md:h-[10vw] lg:w-[12vw] lg:h-[8vw] bg-black/5 shadow-sm">
                    {item.img && (
                      <img src={item.img} className="w-full h-full object-cover" alt="" />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}