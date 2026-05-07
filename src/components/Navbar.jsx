"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// 1. Data Structure for the Mega Menus
const navItems = [
  { name: 'Services', hasMenu: true },
  { name: 'Industries', hasMenu: true },
  { name: 'International', hasMenu: true },
  { name: 'About', hasMenu: true },
  { name: 'Work', hasMenu: false, badge: '25' },
  { name: 'Careers', hasMenu: false },
  { name: 'Blog', hasMenu: false },
  { name: 'Webinar', hasMenu: false }
];

const megaMenus = {
  Services: {
    columns: [
      {
        title: "Core Services",
        links: [
          { label: "Search & Growth Strategy", image: "/0B5A6875.webp" },
          { label: "Onsite SEO", image: "/Screenshot-2025-06-23-at-23.16.14.webp" },
          { label: "Content Experience", image: "/IMG_5079.webp" },
          { label: "B2B Marketing", image: "/WhatsApp-Image-2025-06-03-at-08.34.50.webp" }
        ]
      },
      {
        title: "",
        links: [
          { label: "Digital PR", image: "/Screenshot-2025-06-23-at-22.39.35.webp" },
          { label: "Social Media & Campaigns", image: "/data.webp" },
          { label: "Data & Insights", image: "/temp_image_43CEDE6C-4430-479F-9DBF-B348FA9AC991.webp" },
          { label: "Social SEO/Search", image: "/Screenshot-2025-09-24-at-11.47.25.webp" }
        ]
      }
    ],
    action: "View All Services"
  },
  International: {
    columns: [
      {
        title: "",
        links: [
          { label: "US Digital PR", image: "/d4df0d30-d590-4e94-9056-9491f4beacba.webp" },
          { label: "Spain Digital PR", image: "/Logos_2026-04-23-101020_frxy.webp" },
          { label: "Germany Digital PR", image: "/27.webp" },
          { label: "Netherlands Digital PR", image: "/Logos_2026-04-23-095313_xfhk.webp" }
        ]
      }
    ]
  },
  Industries: {
    columns: [
      {
        title: "",
        links: [
          { label: "B2B Marketing", image: "/IMG_5079.webp" }
        ]
      }
    ]
  },
  About: {
    columns: [
      {
        title: "",
        links: [
          { label: "About Us", image: "/0B5A7487.webp" },
          { label: "Meet The Risers", image: "/Screenshot-2025-06-23-at-23.14.49.webp" },
          { label: "Culture", image: "/IMG_4280-2.webp" },
          { label: "Testimonials", image: "/d4df0d30-d590-4e94-9056-9491f4beacba.webp" }
        ]
      }
    ]
  }
};

// Extracted Raw SVG Logo
const RiseLogo = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 21">
    <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z"></path>
    <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z"></path>
    <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z"></path>
    <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z"></path>
    <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z"></path>
    <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z"></path>
    <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z"></path>
    <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z"></path>
    <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z"></path>
    <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z"></path>
    <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z"></path>
    <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z"></path>
    <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z"></path>
    <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z"></path>
  </svg>
);


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Track scroll position for hide/show logic
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  
  // States for Desktop Mega Menu
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  // State for Mobile Accordion Menu
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Advanced Hide on Scroll Down / Show on Scroll Up logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Check if scrolled past top (for blurring/backgrounds)
      setScrolled(currentScrollY > 50);

      // 2. Exception Sections (e.g., Featured Work)
      const featuredWork = document.getElementById("featured-work");
      let forceHide = false;

      if (featuredWork) {
        const rect = featuredWork.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          forceHide = true;
        }
      }

      // 3. Hide/Show logic
      if (forceHide) {
        setHidden(true);
        setActiveMenu(null);
      } else {
        if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
          // Scrolling Down
          setHidden(true);
          setActiveMenu(null);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling Up
          setHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Window Resize Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  // Mega Menu Handlers
  const handleMenuEnter = (itemName) => {
    if (megaMenus[itemName]) {
      setActiveMenu(itemName);
      setActiveImage(megaMenus[itemName].columns[0].links[0].image);
    } else {
      setActiveMenu(null);
    }
  };

  const getActiveMenuImages = () => {
    if (!activeMenu || !megaMenus[activeMenu]) return [];
    let images = [];
    megaMenus[activeMenu].columns.forEach(col => {
      col.links.forEach(link => images.push(link.image));
    });
    return images;
  };

  // Toggle Mobile Accordion Dropdown
  const toggleMobileDropdown = (itemName) => {
    setActiveMobileDropdown((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className={`pt-2.5 px-2.5 w-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex justify-center z-[60] relative items-center text-xs w-full py-2 px-5 text-center font-semibold rounded-2xl text-grey-900 bg-mint">
          🚨 The Category Leaderboard - Live Now
        </div>
      </div>

      {/* BACKGROUND DIMMER FOR MEGA MENU */}
      <div 
        className={`fixed inset-0 w-screen h-screen z-30 transition-all duration-300 pointer-events-none
          ${activeMenu ? 'opacity-100 backdrop-blur-md bg-grey-900/20' : 'opacity-0 backdrop-blur-none'}`}
      />

      {/* Outer Wrapper for exact centering and scroll translation */}
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none transition-transform duration-500 ease-in-out ${hidden ? '-translate-y-[150%]' : 'translate-y-0'} ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Main Header Container */}
        <header 
          className={`w-full max-w-[1600px] pointer-events-auto transition-all duration-500 ease-in-out px-2 lg:px-8
            ${scrolled ? 'pt-2 lg:pt-4' : 'pt-8 lg:pt-12'}`}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Inner visible navbar bar */}
          <div className={`w-full h-16 lg:h-[5.5rem] flex items-center justify-between relative z-50 transition-all duration-500 px-4 md:px-8 lg:px-10
            ${scrolled ? 'bg-white/85 backdrop-blur-xl shadow-md rounded-[2rem] lg:rounded-full' : 'bg-transparent rounded-[2rem] lg:rounded-full'}`}>
            
            {/* 1. Left Section: Logo */}
            <Link href="/" className="flex w-32 md:w-40 xl:w-44 z-50 relative shrink-0">
               <div className="aspect-4/3 w-full">
                  <RiseLogo className={`w-full h-full object-contain transition-colors duration-300 fill-current ${scrolled ? 'text-black' : 'text-white'}`} />
              </div>
            </Link>

            {/* 2. Center Section: Navigation Links */}
            <div className="hidden lg:flex items-center gap-x-2 z-50 relative">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(item.name)}
                >
                  <Link 
                    href="#" 
                    className={`relative flex items-center font-medium tracking-tight transition-all duration-300 px-4 py-1.5 rounded-full
                      ${activeMenu === item.name 
                        ? 'bg-white text-grey-900 shadow-sm' 
                        : (scrolled ? 'text-grey-900 hover:bg-grey-100/50' : 'text-white hover:bg-white/20')
                      }`}
                  >
                    {item.name} {item.hasMenu && '+'}
                    
                    {item.badge && (
                      <div className="absolute top-0 right-0 -translate-y-1 translate-x-2 bg-mint text-grey-900 text-[10px] font-bold px-1.5 rounded-full">
                        {item.badge}
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* 3. Right Section: Get In Touch Button */}
            <div className="hidden lg:flex items-center z-50 relative shrink-0">
              <Link 
                href="#" 
                className={`inline-flex justify-center gap-x-2 items-center font-sans-primary font-medium px-6 py-3 rounded-3xl transition duration-300 hover:rounded-xl 
                  ${scrolled ? 'bg-grey-900 text-white' : 'bg-white text-grey-900'}`}
              >
                <span>Get in touch</span>
                <span className="text-xs mt-1">↗</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="inline-flex lg:hidden z-50 relative">
              <button 
                className="inline-flex items-center justify-center w-12 h-8"
                onClick={() => setMobileMenuOpen(true)}
              >
                <div className="flex w-5 h-2 flex-col items-start justify-between">
                  <div className="w-full h-px relative -top-px transition-transform duration-500 transform rotate-0">
                    <div className={`w-full h-0.5 ${scrolled ? 'bg-grey-900' : 'bg-white'}`}></div>
                  </div>
                  <div className="w-full h-px transition-transform duration-500 transform rotate-0">
                    <div className={`w-full h-0.5 ${scrolled ? 'bg-grey-900' : 'bg-white'}`}></div>
                  </div>
                </div>
              </button>
            </div>

{/* 4. THE DESKTOP MEGA MENU DROPDOWN 
                FIXED: Increased px (padding left/right) and gaps to make the white box much wider.
            */}
            <div 
              className={`absolute top-[80px] lg:top-[85px] left-1/2 -translate-x-1/2 w-max bg-white rounded-[2rem] py-6 px-10 lg:py-8 lg:px-16 shadow-2xl z-40 flex transition-all duration-300 transform origin-top
                ${activeMenu ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
              {activeMenu && megaMenus[activeMenu] && (
                <>
                  {/* MAIN INNER CONTAINER: Increased gap between the text block and the image block */}
                  <div className="flex items-center gap-12 lg:gap-20">
                    
                    {/* The Two Text Columns: Increased gap between the columns themselves */}
                    <div className="flex items-start gap-12 lg:gap-16 pl-2">
                      {megaMenus[activeMenu].columns.map((col, idx) => (
                        <div key={idx} className="flex flex-col justify-start">
                          <div className="h-6 mb-2">
                            <div className="text-grey-400 text-xs font-medium tracking-tight">
                              {col.title}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-y-1.5">
                            {col.links.map((link, linkIdx) => (
                              <div 
                                key={linkIdx} 
                                className="relative overflow-hidden group cursor-pointer h-7"
                                onMouseEnter={() => setActiveImage(link.image)}
                              >
                                <Link href="#" className="block text-[1.15rem] leading-[1.6] font-medium tracking-tight text-grey-900 transition-transform duration-300 group-hover:-translate-y-full">
                                  {link.label}
                                </Link>
                                <Link href="#" className="absolute top-0 left-0 w-full text-[1.15rem] leading-[1.6] font-medium tracking-tight text-grey-900 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                                  {link.label}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Image Block */}
                    <div className="w-[220px] h-[220px] lg:w-[260px] lg:h-[260px] rounded-2xl overflow-hidden relative shrink-0 bg-grey-100">
                      {getActiveMenuImages().map((img) => (
                        <img
                          key={img}
                          src={img}
                          alt="Menu Feature"
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImage === img ? 'opacity-100' : 'opacity-0'}`}
                        />
                      ))}

                      {megaMenus[activeMenu].action && (
                        <div className="absolute bottom-4 left-4 z-20">
                          <Link href="#" className="bg-grey-900 text-white px-4 py-2.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition hover:scale-105 shadow-md">
                            {megaMenus[activeMenu].action} <span className="text-[10px]">↗</span>
                          </Link>
                        </div>
                      )}
                    </div>

                  </div>
                </>
              )}
            </div>

          </div>
        </header>
      </div>

      {/* =========================================
          FULL SCREEN MOBILE MENU
      ========================================= */}
      <div className={`w-full h-svh fixed top-0 left-0 z-[100] transition-all duration-500 p-2 lg:hidden
        ${mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}
      >
        <div className="w-full h-full bg-grey-900/95 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col justify-between px-5 pt-8 pb-5 shadow-2xl relative">
            
            <div className="w-full flex justify-between items-center mb-10 shrink-0">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="w-32">
                 <RiseLogo className="w-full h-full object-contain text-white fill-current" />
              </Link>
              
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 z-50 cursor-pointer"
                aria-label="Close Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <nav className="flex flex-col w-full flex-1 overflow-y-auto overflow-x-hidden">
                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col w-full">
                    
                    <div className="flex items-center justify-between w-full py-1">
                      <Link href="#" className="text-white text-3xl tracking-tight font-medium leading-none">
                        {item.name}
                      </Link>
                      
                      {item.hasMenu && (
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            toggleMobileDropdown(item.name);
                          }}
                          className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center text-white transition-transform duration-300 z-50 cursor-pointer"
                          style={{ transform: activeMobileDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        >
                          <svg className="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                      )}
                    </div>

                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${activeMobileDropdown === item.name ? 'grid-rows-[1fr] opacity-100 pb-4 pt-3' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden flex flex-col gap-y-3 pl-1">
                        {item.hasMenu && megaMenus[item.name] && megaMenus[item.name].columns.map(col => 
                          col.links.map(link => (
                            <Link key={link.label} href="#" className="text-white/70 hover:text-white transition-colors text-xl font-medium tracking-tight">
                              {link.label}
                            </Link>
                          ))
                        )}
                      </div>
                    </div>

                  </div>
                ))}
            </nav>
            
            <div className="w-full shrink-0 mt-6 pt-2">
              <Link href="#" className="w-full flex justify-center gap-x-2 items-center font-sans-primary font-medium px-6 py-4 rounded-3xl bg-white text-grey-900 transition-transform active:scale-95">
                <span>Get In Touch</span>
                <span className="text-xs mt-1">↗</span>
              </Link>
            </div>

        </div>
      </div>
    </>
  );
}