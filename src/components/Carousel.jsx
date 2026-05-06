"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Carousel() {
  const clients = [
    { name: "Sony", src: "/logos/sony.svg" },
    { name: "RedBull", src: "/logos/redbull.svg" },
    { name: "Gymshark", src: "/logos/gymshark.svg" },
    { name: "Next", src: "/logos/next.svg" },
    { name: "Bumble", src: "/logos/bumble.svg" },
    { name: "PrettyLittleThing", src: "/logos/plt.svg" },
    { name: "Sixt", src: "/logos/sixt.svg" },
    { name: "Halfords", src: "/logos/halfords.svg" },
  ];

  return (
    <section className="w-full pt-6 xl:pt-12 overflow-hidden">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-20 w-full gap-y-2">
          
          <div className="col-span-20 flex items-center md:col-span-4 lg:col-span-3 xl:col-span-2">
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-sm/tight font-sans-primary font-medium tracking-tight sm:max-w-32">
              The agency behind ...
            </h2>
          </div>

          <div className="relative w-full col-span-20 md:col-span-16 lg:col-span-17 xl:col-span-18">
            <div className="w-full relative overflow-hidden z-0">
              <div className="flex relative z-0 overflow-hidden w-full lg:w-[120vw]">
                
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={2.5}
                  speed={3000}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2.5 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                    1440: { slidesPerView: 7.5 },
                    1920: { slidesPerView: 8.5 },
                  }}
                  className="w-full !ease-linear"
                >
                  {clients.map((client, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="w-20 py-5 relative lg:w-24">
                        <div className="w-full h-full relative aspect-20/9">
                          <img 
                            src={client.src} 
                            alt={client.name} 
                            className="w-full h-full object-contain absolute inset-0"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
            </div>
            
            {/* Blur fades on the edges */}
            <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-grey-100 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-grey-100 to-transparent z-10 pointer-events-none"></div>
          
          </div>
        </div>
      </div>
    </section>
  );
}