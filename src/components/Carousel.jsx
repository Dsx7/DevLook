"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export default function Carousel() {
  const clients = [
    { name: "SharkNinja", src: "/logos/SN.webp" },
    { name: "RedBull", src: "/logos/red-bull-logo-black.webp" },
    {
      name: "XBox",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full object-contain">
          <path d="M7.202 15.967a8 8 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33m-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.4 8.4 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.5 9.5 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4 4 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.8 7.8 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12 12 0 0 1-.654-.319Z" />
        </svg>
      )
    },
    {
      name: "PlayStation",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full object-contain">
          <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
        </svg>
      )
    },
    {
      name: "Apple",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-full h-full object-contain" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 24 184.8 8 273.5q-10.9 68.3 25.5 130.2c17 29.2 38 61.5 74.5 61.5 35.8 0 54.8-23.4 97.4-23.4 42.6 0 57.5 23.4 97.4 23.4 40.5 0 62.7-32.3 84.8-63.5 24-34.9 33.7-65.7 34.6-67.4-1.2-.5-51.4-19.7-53.5-65.6zM263.6 118.8c24.6-29.2 36.2-56.4 33-85.1-26.2 2.1-55.7 18.4-74.3 40.5-16.7 18.8-31.5 48.2-27.4 75.9 29.4 2.1 55.7-13.6 68.7-31.3z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full object-contain" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      name: "Google",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-full h-full object-contain" fill="currentColor">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      )
    },
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
                        <div className="w-full h-12 relative flex justify-center items-center text-grey-900 [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                          {client.svg ? (
                            client.svg
                          ) : (
                            <img
                              src={client.src}
                              alt={client.name}
                              className="w-full h-full object-contain"
                            />
                          )}
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