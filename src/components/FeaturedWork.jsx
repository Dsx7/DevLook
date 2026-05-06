"use client";
import { useState } from "react";
import Link from "next/link";

const caseStudies = [
  { id: 1, title: "SIXT", date: "[2023-2025]", tag: "Car rental", color: "#cb7b3a", img: "/work/sixt.jpg", stat: "An extra 3m clicks regionally through SEO" },
  { id: 2, title: "Dojo - B2B", date: "[2021-2025]", tag: "Card Machines", color: "#fdd8c4", img: "/work/dojo.jpg", stat: "A B2B success story for Dojo card machines" },
  { id: 3, title: "Magnet Trade", date: "[2023-2024]", tag: "Kitchens", color: "#d8c4fd", img: "/work/magnet.jpg", stat: "A full service SEO success story 170%+ increase" },
  { id: 4, title: "Leading E Sim brand", date: "[2023-2025]", tag: "Esims", color: "#cb7b3a", img: "/work/esim.jpg", stat: "Increasing brand and non brand visibility UK/ES" },
  { id: 5, title: "JD Sports", date: "[2025]", tag: "Trainers", color: "#3a8ccb", img: "/work/jdsports.jpg", stat: "65% up YoY in clicks for JDSports FR, IT, ES" }
];

export default function FeaturedWork() {
  const [activeHover, setActiveHover] = useState(null);

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="w-full relative -my-7 flex overflow-hidden lg:overflow-visible">
          
          {/* Main Container */}
          <div className="w-full py-7 top-0 lg:h-screen-fix lg:sticky">
            <div className="w-full h-full overflow-hidden bg-grey-900 rounded-3xl grid grid-cols-12 px-5 lg:px-8 xl:px-10">
              
              {/* Left Column (Sticky Titles) - Hidden on Mobile */}
              <div className="relative col-span-12 items-start hidden lg:flex lg:flex-row lg:items-center lg:col-span-6 lg:h-[96svh]">
                <div className="flex flex-col items-start relative z-10 h-full pt-16 lg:pt-24 lg:pb-32 lg:gap-y-20">
                  <h2 className="text-white text-md/tight lg:text-lg/tight xl:text-xl/tight font-sans-primary font-medium tracking-tight">
                    Featured Work
                  </h2>
                  
                  <div className="relative flex-1 overflow-hidden pr-5">
                    {/* Fake scroll gradients */}
                    <div className="absolute top-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-gradient-to-b from-grey-900"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-gradient-to-t from-grey-900"></div>
                    
                    <div className="grid gap-y-2 relative z-10 4xl:gap-y-5">
                      {caseStudies.map((work) => (
                        <div key={work.id} className="relative transition">
                          <Link 
                            href="#" 
                            className={`flex items-start gap-x-2 transition-transform duration-300 ${activeHover === work.id ? 'translate-x-3' : ''}`}
                            onMouseEnter={() => setActiveHover(work.id)}
                            onMouseLeave={() => setActiveHover(null)}
                          >
                            <div className={`text-5xl/none lg:text-6xl/none xl:text-7xl/[0.9] font-sans-primary font-medium tracking-tight ${activeHover === work.id ? 'text-white' : 'text-white/50'}`}>
                              {work.title}
                            </div>
                            <div className="text-white/50 text-xs font-medium mt-2">
                              {work.date}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Scrolling Images) */}
              <div className="col-span-12 grid pt-7 pb-14 lg:col-span-6 lg:col-start-7 3xl:col-span-5 3xl:col-start-8">
                <div className="mb-5 lg:hidden">
                  <h2 className="text-white text-md/tight font-sans-primary font-medium tracking-tight">Featured Work</h2>
                </div>

                {/* Mobile / Desktop Image Cards */}
                {caseStudies.map((work) => (
                  <Link 
                    key={work.id} 
                    href="#" 
                    className="grid group rounded-2xl overflow-hidden mb-5 lg:mb-7 relative"
                    onMouseEnter={() => setActiveHover(work.id)}
                    onMouseLeave={() => setActiveHover(null)}
                  >
                    {/* Image */}
                    <div className="col-start-1 row-start-1 transition duration-500 group-hover:scale-105">
                      <div className="relative overflow-hidden w-full pt-[75%]">
                        <img src={work.img} alt={work.title} className="absolute top-0 left-0 w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Top Right Tag */}
                    <div className="col-start-1 row-start-1 p-3 z-30 flex justify-end items-start lg:items-end lg:p-5">
                      <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5">
                        <div>{work.tag}</div>
                      </div>
                    </div>

                    {/* Mobile Title Overlay */}
                    <div className="col-start-1 row-start-1 p-3 z-30 relative flex justify-start items-end lg:hidden lg:p-5">
                      <div className="grid gap-y-1 relative z-20">
                        <div className="text-white text-xs font-medium mt-2">{work.date}</div>
                        <div className="text-white text-3xl/none font-sans-primary font-medium tracking-tight">{work.title}</div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70"></div>
                    </div>

                    {/* Hover Color Mask (Matches exact colors from live site) */}
                    <div 
                      className={`col-start-1 row-start-1 grid-cols-12 flex flex-col items-start justify-between z-40 p-5 transition-opacity duration-300 ${activeHover === work.id ? 'opacity-100' : 'opacity-0'}`}
                      style={{ backgroundColor: work.color, color: "#111212" }}
                    >
                      <div className="text-4xl/none font-sans-primary font-medium tracking-tight">{work.stat}</div>
                      <div className="w-full flex items-end justify-end">
                        <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5">
                          <div>{work.tag}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}