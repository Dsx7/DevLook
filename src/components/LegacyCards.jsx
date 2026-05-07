"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          desktopCardsRef.current.forEach((card, index) => {
            if (!card) {
              return;
            }

            gsap.to(card, {
              yPercent: -105,
              rotate: -12 - index * 6,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="legacy" ref={sectionRef} className="px-4 pb-[4.5rem] sm:px-7 lg:pb-24">
      <div className="mx-auto max-w-[1600px] lg:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`min-w-[82vw] snap-center rounded-[2rem] p-7 shadow-[0_20px_60px_rgba(17,18,18,0.08)] ${card.background} ${card.textColor}`}
            >
              <div className="mx-auto mb-5 h-[9.5rem] w-[9.5rem] overflow-hidden rounded-[1.4rem]">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-center text-[2.4rem] font-medium leading-none tracking-tight">{card.title}</h3>
              <p className="mt-4 text-center text-base leading-relaxed">{card.body}</p>
              {card.extra ? <p className="mt-5 text-center text-base leading-relaxed">{card.extra}</p> : null}
            </article>
          ))}
        </div>
      </div>

      <div className="relative hidden h-[280vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {cards.map((card, index) => (
            <article
              key={card.title}
              ref={(element) => {
                desktopCardsRef.current[index] = element;
              }}
              className={`absolute flex w-full max-w-[640px] flex-col items-center rounded-[2.6rem] p-10 shadow-[0_40px_120px_rgba(17,18,18,0.1)] xl:max-w-[760px] ${card.background} ${card.textColor}`}
              style={{
                transform: `rotate(${index === 0 ? 7 : index === 1 ? 12 : 17}deg)`,
                zIndex: cards.length - index,
              }}
            >
              <div className="mb-6 h-44 w-44 overflow-hidden rounded-[1.6rem] xl:h-48 xl:w-48">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-center text-[4rem] font-medium leading-none tracking-tight xl:text-[4.7rem]">
                {card.title}
              </h3>
              <p className="mt-4 max-w-[500px] text-center text-[1.35rem] leading-relaxed xl:max-w-[560px] xl:text-[1.5rem]">
                {card.body}
              </p>
              {card.extra ? (
                <p className="mt-7 max-w-[500px] text-center text-[1.35rem] leading-relaxed xl:max-w-[560px] xl:text-[1.5rem]">
                  {card.extra}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
