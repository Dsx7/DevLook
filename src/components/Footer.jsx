import Link from "next/link";
import RiseLogo from "@/components/RiseLogo";

const footerColumns = [
  ["Services", "Work", "About", "Culture", "Meet The Risers"],
  ["Testimonials", "Blog", "Webinars", "Careers"],
  ["Sheffield", "Manchester", "London", "New York", "Contact"],
];

const socials = ["f", "x", "in", "yt", "tt", "ig"];

// Pure SVGs to guarantee they never break or show weird text
function SocialIconSVG({ name, className }) {
  switch (name) {
    case "f":
      return <svg viewBox="0 0 320 512" fill="currentColor" className={className}><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>;
    case "x":
      return <svg viewBox="0 0 512 512" fill="currentColor" className={className}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>;
    case "in":
      return <svg viewBox="0 0 448 512" fill="currentColor" className={className}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>;
    case "yt":
      return <svg viewBox="0 0 576 512" fill="currentColor" className={className}><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>;
    case "tt":
      return <svg viewBox="0 0 448 512" fill="currentColor" className={className}><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>;
    case "ig":
      return <svg viewBox="0 0 448 512" fill="currentColor" className={className}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>;
    default:
      return null;
  }
}

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15L15 5M8 5H15V12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// 100% Fixed "Double Text" Glitch, now with larger text sizing as requested
// 100% Fixed Text Glitch - Removed height constraints and used absolute overlay
function FooterFlipLink({ text }) {
  return (
    <Link href="#footer" className="group relative flex flex-col overflow-hidden w-max text-white hover:text-mint">
      {/* Primary Text */}
      <span className="block text-[1.2rem] lg:text-[1.35rem] font-medium leading-[1.3] tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
        {text}
      </span>
      {/* Hover Text Overlay */}
      <span className="absolute inset-0 block text-[1.2rem] lg:text-[1.35rem] font-medium leading-[1.3] tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0">
        {text}
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="w-full p-2">
      <div className="mx-auto max-w-[1600px] w-full bg-grey-900 rounded-[2.5rem] pt-14 pb-8 px-5 md:px-7 lg:py-12 relative z-20 overflow-hidden">
        
        {/* Adjusted Grid: Pushing the right side over correctly */}
        <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-10 lg:gap-y-0">
          
          {/* =========================================
              Left Side: Newsletter & Socials
          ========================================= */}
          <div className="flex flex-col items-start justify-start col-span-12 mb-6 lg:mb-0 lg:col-span-4 gap-y-4 md:gap-y-5">
            
            {/* Reduced Heading Size! */}
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-2xl xl:text-3xl 4xl:text-4xl font-sans-primary font-medium tracking-tight">
              Stay updated with Rise news
            </h2>

            <form className="relative w-full max-w-[520px]">
              <input
                type="email"
                placeholder="Your Email Address"
                className="appearance-none transition bg-white/10 rounded-full w-full text-white font-medium tracking-tight leading-none text-base px-5 py-3.5 lg:text-lg lg:px-6 lg:py-4 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <div className="absolute top-0 right-0 p-1.5 h-full flex items-center">
                <button
                  type="submit"
                  className="w-9 h-9 lg:w-11 lg:h-11 bg-mint text-grey-900 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-white hover:rotate-90"
                  aria-label="Submit"
                >
                  <ArrowIcon className="h-4 w-4 lg:h-[18px] lg:w-[18px]" />
                </button>
              </div>
            </form>

            {/* Social Pills - Slightly Smaller Icons & Padding! */}
            <div className="flex gap-1.5 mt-2">
              {socials.map((item) => (
                <Link
                  key={item}
                  href="#footer"
                  className="inline-flex items-center gap-x-2 rounded-xl px-2 py-1 transition bg-white text-grey-900 hover:rounded-sm hover:bg-mint"
                >
                  <div className="inline-flex items-center justify-center">
                    <SocialIconSVG name={item} className="h-2.5 w-2.5 lg:h-3 lg:w-3" />
                  </div>
                  <ArrowIcon className="h-2 w-2 lg:h-2.5 lg:w-2.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* =========================================
              Right Side: Navigation Columns
          ========================================= */}
          <div className="flex justify-between lg:justify-start lg:gap-x-16 xl:gap-x-36 col-span-12 flex-wrap md:flex-row md:col-span-11 lg:col-span-7 lg:col-start-6 gap-y-10">
            {footerColumns.map((column, index) => (
              <div
                key={index}
                className={`flex flex-col items-start border-l border-white/20 pl-4 lg:pl-5 w-1/2 md:w-auto ${
                  index === 2 ? "w-full mt-2 md:mt-0 lg:w-auto" : "w-1/2 md:w-auto"
                }`}
              >
                {/* This inner div locks the vertical spacing perfectly */}
                <div className="flex flex-col gap-y-1.5 w-full">
                  {column.map((item) => (
                    <FooterFlipLink key={item} text={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================
            Big Logo
        ========================================= */}
        <div className="w-full mt-14 lg:mt-32">
          <RiseLogo className="h-auto w-full fill-current text-white" />
        </div>

        {/* =========================================
            Bottom Copyright & Links
        ========================================= */}
        <div className="w-full flex justify-between flex-col mt-8 lg:mt-10 items-start md:items-end md:flex-row lg:items-center">
          
          {/* Wraps perfectly inline on mobile */}
          <div className="flex gap-x-2 gap-y-2 flex-wrap items-center md:gap-3">
            <div className="text-white font-light leading-tight text-[10px] md:text-xs">
              © 2025 Rise at Seven Ltd. All rights reserved
            </div>
            
            <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>
            
            <div className="text-white font-light leading-tight text-[10px] md:text-xs">
              Company Number 11955187
            </div>
            
            <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>
            
            <div className="text-white font-light leading-tight text-[10px] md:text-xs">
              VAT Registered GB 322402945
            </div>
            
            <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>
            
            <Link href="#footer" className="text-white font-light leading-tight text-[10px] md:text-xs hover:text-mint transition-colors">
              Privacy Policy
            </Link>
            
            <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>
            
            <Link href="#footer" className="text-white font-light leading-tight text-[10px] md:text-xs hover:text-mint transition-colors">
              Terms &amp; conditions
            </Link>

            {/* The "MadeByShape" text wraps inline with the dots on mobile, but moves to the right on Desktop */}
            <div className="w-1 h-1 rounded-full bg-white inline-flex lg:hidden md:mt-0.5"></div>
            <Link href="#footer" className="text-white font-light leading-tight text-[10px] md:text-xs hover:text-mint transition-colors lg:hidden">
              Website MadeByShape
            </Link>
          </div>

          <div className="w-full mt-4 md:mt-1 md:ml-auto md:text-right lg:mt-0 lg:w-auto hidden lg:block">
            <Link href="#footer" className="text-white font-light leading-tight text-[10px] md:text-xs hover:text-mint transition-colors">
              Website MadeByShape
            </Link>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
}