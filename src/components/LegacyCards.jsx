"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const cards = [
  {
    title: "Pioneers",
    image: "/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.webp",
    background: "bg-black",
    textColor: "text-white",
    body:
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    extra:
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
  },
  {
    title: "Award Winning",
    image: "/d4df0d30-d590-4e94-9056-9491f4beacba.webp",
    background: "bg-mint",
    textColor: "text-grey-900",
    body:
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
  },
  {
    title: "Speed",
    image: "/IMG_5023.webp",
    background: "bg-white",
    textColor: "text-grey-900",
    body:
      "People ask us why we are called Rise at Seven? Ever heard the saying early bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms.",
    extra: "We've created a service which takes ideas to result within 60 minutes.",
  },
];

export default function LegacyCards() {
  const sectionRef = useRef(null);
  const desktopCardsRef = useRef([]);
  const mobileScrollRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Triple the cards for infinite scroll illusion
  const loopedCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.5,
            },
          });

          // Initial Rotations from start piled-up state:
          // Top (Black): -2deg
          // Middle (Mint): 4deg
          // Bottom (White): 10deg

          gsap.set(desktopCardsRef.current[0], { rotate: -2, xPercent: 0, yPercent: 0 });
          gsap.set(desktopCardsRef.current[1], { rotate: 4, xPercent: 0, yPercent: 0 });
          gsap.set(desktopCardsRef.current[2], { rotate: 10, xPercent: 0, yPercent: 0 });

          // PEELING FORMATION REARRANGEMENT:
          // The cards simultaneously rearrange to create the peeking layered effect
          // by animating simultaneously with different x/y and larger rotations.

          // Card 0 (Black/Pioneers): moves top-left, rotated significantly
          tl.to(desktopCardsRef.current[0], {
            xPercent: -40,
            yPercent: -30,
            rotate: -25,
            ease: "power2.inOut",
          }, 0);

          // Card 1 (Mint/Award Winning): moves slightly middle, minor rotation
          tl.to(desktopCardsRef.current[1], {
            xPercent: 0,
            yPercent: -10,
            rotate: 15,
            ease: "power2.inOut",
          }, 0);

          // Card 2 (White/Speed): moves bottom-right, rotated significantly
          tl.to(desktopCardsRef.current[2], {
            xPercent: 40,
            yPercent: 30,
            rotate: 35,
            ease: "power2.inOut",
          }, 0);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Initial scroll position for mobile infinite loop
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      // Wait for layout
      setTimeout(() => {
        const cardWidth = container.scrollWidth / 9;
        container.scrollLeft = cardWidth * 3; // Start at the middle set (index 3)
      }, 100);
    }
  }, []);

  const handleMobileScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.scrollWidth / 9;

    if (cardWidth <= 0) return;

    let index = Math.round(scrollLeft / cardWidth);
    setActiveCardIndex(index % 3);

    // Infinite scroll reset logic (silent jump)
    if (index <= 0) {
      container.scrollLeft = cardWidth * 3;
    } else if (index >= 8) {
      container.scrollLeft = cardWidth * 5;
    }
  };

  return (
    <section id="legacy-card" ref={sectionRef} className="px-4 pb-[4.5rem] sm:px-7 lg:pb-48 pt-10 lg:pt-0">

      {/* Mobile-only Text Title */}
      <div className="text-center text-xl font-medium tracking-tight text-grey-900 sm:text-2xl mb-8 lg:hidden">
        Legacy In The Making
      </div>

      <div className="mx-auto w-full lg:hidden">
        <div
          ref={mobileScrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
          onScroll={handleMobileScroll}
        >
          {loopedCards.map((card, i) => (
            <article
              key={`${card.title}-${i}`}
              className={`w-full shrink-0 snap-center rounded-[2rem] p-7 shadow-[0_20px_60px_rgba(17,18,18,0.08)] ${card.background} ${card.textColor}`}
            >
              <div className="mx-auto mb-5 h-[14rem] w-full max-w-[22rem] overflow-hidden rounded-[1.4rem]">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-center text-[2.4rem] font-medium leading-none tracking-tight">{card.title}</h3>
              <p className="mt-4 text-center text-[1.1rem] leading-relaxed">{card.body}</p>
              {card.extra ? <p className="mt-5 text-center text-[1.1rem] leading-relaxed">{card.extra}</p> : null}
            </article>
          ))}
        </div>

        {/* Mobile Progress Bar */}
        <div className="mt-6 h-[3px] w-full bg-grey-200 overflow-hidden rounded-full">
          <div
            className="h-full bg-grey-900 transition-all duration-300 rounded-full"
            style={{ width: `${((activeCardIndex + 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="relative hidden h-[280vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden pt-20">

          {/* Desktop-only Text Title */}
          <div className="absolute top-[8%] text-center text-2xl font-medium tracking-tight text-grey-900">
            Legacy In The Making
          </div>

          <div className="relative flex w-full max-w-[480px] xl:max-w-[540px] items-center justify-center mt-10">
            {cards.map((card, index) => (
              <article
                key={card.title}
                ref={(element) => {
                  desktopCardsRef.current[index] = element;
                }}
                className={`absolute flex w-full max-w-[480px] flex-col items-center rounded-[2.6rem] p-8 shadow-[0_20px_80px_rgba(17,18,18,0.15)] xl:max-w-[540px] xl:p-10 ${card.background} ${card.textColor}`}
                style={{
                  zIndex: cards.length - index,
                }}
              >
                <div className="mb-6 h-40 w-40 overflow-hidden rounded-[1.6rem] xl:h-44 xl:w-44">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-center text-[3.2rem] font-medium leading-none tracking-tight xl:text-[3.8rem]">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-[400px] text-center text-[1rem] leading-relaxed xl:max-w-[460px] xl:text-[1.1rem]">
                  {card.body}
                </p>
                {card.extra ? (
                  <p className="mt-5 max-w-[400px] text-center text-[1rem] leading-relaxed xl:max-w-[460px] xl:text-[1.1rem]">
                    {card.extra}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}