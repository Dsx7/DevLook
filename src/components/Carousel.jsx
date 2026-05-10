"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export default function Carousel() {
  const clients = [
    { name: "SharkNinja", src: "/logos/SN.webp" },
    { name: "RedBull", src: "/logos/red-bull-logo-black.webp" },
    { name: "Gymshark", src: "/logos/gymshark.svg" },
    { name: "Next", src: "/logos/next.svg" },
    { name: "Bumble", src: "/logos/bumble.svg" },
    { name: "PrettyLittleThing", src: "/logos/plt.svg" },
    { name: "Sixt", src: "/logos/sixt.svg" },
    { name: "Emirates", src: "/logos/emirates.webp" },
    { name: "Kroger", src: "/logos/kroger.webp" },
  ];

  return (
    <section className="w-full pt-12 xl:pt-24 pb-12 xl:pb-24 overflow-hidden bg-grey-100">
      <div className="w-full px-4 md:px-7">
        
        {/* =========================================
            PART 1: THE MARQUEE CAROUSEL
        ========================================= */}
        <div className="grid grid-cols-20 w-full gap-y-2 relative mb-16 md:mb-24 lg:mb-32">
          
          {/* Static Left Text */}
          <div className="col-span-20 flex items-center md:col-span-4 lg:col-span-3 xl:col-span-2 z-20">
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-sm/tight font-sans-primary font-medium tracking-tight sm:max-w-32">
              The agency behind ...
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full col-span-20 md:col-span-16 lg:col-span-17 xl:col-span-18">
            
            {/* The Blurred Edges (Gradient Fades) */}
            <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-grey-100 via-grey-100/90 to-transparent z-10 pointer-events-none -ml-2"></div>
            <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-grey-100 via-grey-100/90 to-transparent z-10 pointer-events-none -mr-2"></div>

            <div className="w-full relative overflow-hidden z-0">
              <div className="flex relative z-0 overflow-hidden w-full lg:w-[120vw]">
                
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  slidesPerView={2.5}
                  speed={4000} // High speed for smooth continuous movement
                  loop={true}
                  autoplay={{
                    delay: 0, // 0 delay creates the seamless marquee effect
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 3.5 },
                    768: { slidesPerView: 4.5 },
                    1024: { slidesPerView: 6 },
                    1440: { slidesPerView: 7.5 },
                    1920: { slidesPerView: 8.5 },
                  }}
                  // Linear Easing: Forces the slider to never slow down/snap between slides
                  className="w-full [&>.swiper-wrapper]:!ease-linear"
                >
                  {clients.map((client, idx) => (
                    <SwiperSlide key={idx} className="!flex justify-center items-center">
                      <div className="w-24 py-5 relative lg:w-32 flex justify-center items-center mix-blend-multiply">
                        <div className="w-full h-12 relative flex justify-center items-center">
                          <img 
                            src={client.src} 
                            alt={client.name} 
                            className="w-full h-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            PART 2: DRIVING DEMAND & DISCOVERY
        ========================================= */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start gap-x-5 gap-y-8">
          
          {/* Left Column (Paragraph) */}
          <div className="w-full md:mt-2 max-w-sm xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl">
            <h3 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-lg/tight lg:text-xl/tight xl:text-2xl/none 4xl:text-3xl/none font-sans-primary font-medium tracking-tight">
              A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
            </h3>
          </div>

          {/* Right Column (Large Heading & Buttons) */}
          <div className="w-full grid max-w-[24rem] md:max-w-[40rem] xl:max-w-[42rem] 3xl:max-w-[52rem] gap-y-5 md:gap-y-7">
            
            <h2 className="flex flex-col text-left justify-start text-grey-900 text-5xl/none lg:text-6xl/none xl:text-7xl/[0.9] 3xl:text-[5.5rem]/[0.9] font-sans-primary font-medium tracking-tight">
              
              {/* First Line */}
              <div className="flex flex-wrap relative text-left justify-start">
                <div className="inline mr-2 md:mr-3">Driving</div>
                <div className="inline mr-2 md:mr-3">Demand</div>
                <div className="inline mr-2 md:mr-3">&</div>
              </div>
              
              {/* Second Line with Inline Image */}
              <div className="flex flex-wrap items-center relative text-left justify-start mt-[-1%]">
                <div className="inline mr-2 md:mr-3">Discovery</div>
                
                {/* Inline Image Container */}
                <div 
                  className="inline-block relative overflow-hidden bg-black/10 mx-1 md:mx-2 rounded-xl xl:rounded-2xl"
                  style={{ width: "1.1em", height: "1em", transform: "translateY(-0.05em)" }}
                >
                  <img 
                    // Point this to whatever team image you want to use here
                    src="/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.webp" 
                    alt="Rise at Seven Team" 
                    className="w-full h-full object-cover absolute inset-0" 
                  />
                </div>
              </div>
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link 
                href="#" 
                className="group inline-flex justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden cursor-pointer text-base px-6 py-3 rounded-3xl transition-all duration-300 hover:rounded-xl bg-white text-grey-900 shadow-sm"
              >
                <div className="relative overflow-hidden flex items-center h-[20px]">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Our Story</span>
                  <span className="absolute top-0 left-0 text-center transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">Our Story</span>
                </div>
                <span className="text-xs transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 mt-0.5">↗</span>
              </Link>
              
              <Link 
                href="#" 
                className="group inline-flex justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden cursor-pointer text-base px-6 py-3 rounded-3xl transition-all duration-300 hover:bg-black/5 text-grey-900"
              >
                <div className="relative overflow-hidden flex items-center h-[20px]">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Our Services</span>
                  <span className="absolute top-0 left-0 text-center transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">Our Services</span>
                </div>
                <span className="text-xs transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 mt-0.5">↗</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}