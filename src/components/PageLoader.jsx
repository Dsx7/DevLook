"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageLoader({ children }) {
  const wrapperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // 1. Temporarily make the body mint-colored so the background reveals the brand color
    document.body.style.backgroundColor = "#B2F6E3"; // Mint color

    // 3. Animate it expanding outwards to reveal the entire website
    gsap.to(wrapperRef.current, {
      clipPath: "circle(150% at 50% 100%)",
      duration: 1.8,
      ease: "power3.inOut",
      delay: 0.2,
      onComplete: () => {
        // Clear properties so it behaves normally (especially fixed elements like Navbar)
        gsap.set(wrapperRef.current, { clearProps: "all" });
        document.body.style.backgroundColor = ""; // Reset body background
        setIsAnimating(false);
        
        // Dispatch event so the Hero section knows it can start its animations
        window.dispatchEvent(new Event("loaderComplete"));
      }
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`w-full bg-white relative z-10 ${isAnimating ? "pointer-events-none" : "pointer-events-auto"}`}
      style={{ clipPath: "circle(0% at 50% 100%)" }}
    >
      {children}
    </div>
  );
}
