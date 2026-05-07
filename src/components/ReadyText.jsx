"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ReadyText() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!textRef.current) {
        return;
      }

      gsap.fromTo(
        textRef.current,
        { xPercent: 28, y: 90 },
        {
          xPercent: -48,
          y: 220,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ready" ref={sectionRef} className="hidden overflow-hidden px-4 pb-4 pt-4 sm:px-7 lg:block">
      <div className="mx-auto max-w-[1800px]">
        <div className="h-[85vh] overflow-hidden">
          <div
            ref={textRef}
            className="w-max whitespace-nowrap text-[18vw] font-medium leading-none tracking-tight text-grey-900"
          >
            Ready to Rise at Seven?
          </div>
        </div>
      </div>
    </section>
  );
}
