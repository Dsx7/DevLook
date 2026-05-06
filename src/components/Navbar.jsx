"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// 1. Data Structure for the Mega Menus
// Extracted directly from Rise at Seven's live site structure and images
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
          { label: "Search & Growth Strategy", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=800&q=80" },
          { label: "Onsite SEO", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=800&q=80" },
          { label: "Content Experience", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.16.14.png?w=800&q=80" },
          { label: "B2B Marketing", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=800&q=80" }
        ]
      },
      {
        title: "",
        links: [
          { label: "Digital PR", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=800&q=80" },
          { label: "Social Media & Campaigns", image: "https://rise-atseven.transforms.svdcdn.com/production/images/temp_image_43CEDE6C-4430-479F-9DBF-B348FA9AC991.WEBP?w=800&q=80" },
          { label: "Data & Insights", image: "https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=800&q=80" },
          { label: "Social SEO/Search", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-09-24-at-11.47.25.png?w=800&q=80" }
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
          { label: "US Digital PR", image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&q=80" },
          { label: "Spain Digital PR", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos_2026-04-23-101020_frxy.jpg?w=800&q=80" },
          { label: "Germany Digital PR", image: "https://rise-atseven.transforms.svdcdn.com/production/images/27.jpg?w=800&q=80" },
          { label: "Netherlands Digital PR", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos_2026-04-23-095313_xfhk.jpg?w=800&q=80" }
        ]
      }
    ]
  },
  Industries: {
    columns: [
      {
        title: "",
        links: [
          { label: "B2B Marketing", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=800&q=80" }
        ]
      }
    ]
  },
  About: {
    columns: [
      {
        title: "",
        links: [
          { label: "About Us", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7487.jpg?w=800&q=80" },
          { label: "Meet The Risers", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&q=80" },
          { label: "Culture", image: "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_4280-2.jpg?w=800&q=80" },
          { label: "Testimonials", image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&q=80" }
        ]
      }
    ]
  }
};


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // States for Desktop Mega Menu
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  // 2. Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  // 3. Mega Menu Handlers
  const handleMenuEnter = (itemName) => {
    if (megaMenus[itemName]) {
      setActiveMenu(itemName);
      // Set the default image to the first link in the first column
      setActiveImage(megaMenus[itemName].columns[0].links[0].image);
    } else {
      setActiveMenu(null);
    }
  };

  // Extract all images for the current active menu to render them invisibly, 
  // ensuring smooth crossfades without needing to load images on hover.
  const getActiveMenuImages = () => {
    if (!activeMenu || !megaMenus[activeMenu]) return [];
    let images = [];
    megaMenus[activeMenu].columns.forEach(col => {
      col.links.forEach(link => images.push(link.image));
    });
    return images;
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className={`pt-2.5 px-2.5 w-full transition-opacity ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex justify-center z-[60] relative items-center text-xs w-full py-2 px-5 text-center font-semibold rounded-2xl text-grey-900 bg-mint">
          🚨 The Category Leaderboard - Live Now
        </div>
      </div>

      {/* Main Header Container (onMouseLeave clears the mega menu) */}
      <header 
        className={`w-full fixed top-0 left-0 z-50 transition duration-700 h-18 lg:h-22 lg:p-3 ${scrolled ? 'bg-white/60 backdrop-blur-lg translate-y-0' : 'translate-y-12'}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="w-full h-full flex items-center justify-between relative z-20 px-4">
          
          {/* Logo */}
          <Link href="/" className="flex w-32 ml-2 md:w-40 z-50 relative">
             <div className="aspect-4/3 text-current w-full">
                <img 
                  src="https://riseatseven.transforms.svdcdn.com/production/images/Logos/Rise-at-Seven-Logo.svg" 
                  alt="Rise at Seven" 
                  className={`w-full h-full object-contain transition-all duration-300 ${scrolled || activeMenu ? '' : 'invert'}`} 
                />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-x-2 z-20 relative">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => handleMenuEnter(item.name)}
              >
                <Link 
                  href="#" 
                  // Matches the exact hover/active pill shape behavior from your screenshots
                  className={`relative flex items-center font-medium tracking-tight transition-all duration-300 px-4 py-1.5 rounded-full
                    ${activeMenu === item.name 
                      ? 'bg-white text-grey-900' 
                      : (scrolled ? 'text-grey-900 hover:bg-white/40' : 'text-white hover:bg-white/20')
                    }`}
                >
                  {item.name} {item.hasMenu && '+'}
                  
                  {/* The little green notification badge for "Work" */}
                  {item.badge && (
                    <div className="absolute top-0 right-0 -translate-y-1 translate-x-2 bg-mint text-grey-900 text-[10px] font-bold px-1.5 rounded-full">
                      {item.badge}
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Get In Touch Button */}
          <div className="hidden lg:flex items-center z-20">
            <Link 
              href="#" 
              className={`inline-flex justify-center gap-x-2 items-center font-sans-primary font-medium px-6 py-3 rounded-3xl transition duration-300 hover:rounded-xl 
                ${scrolled || activeMenu ? 'bg-grey-900 text-white' : 'bg-white text-grey-900'}`}
            >
              <span>Get in touch</span>
              <span className="text-xs mt-1">↗</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="inline-flex lg:hidden z-50 relative">
            <button 
              className="inline-flex items-center justify-center w-12 h-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="flex w-5 h-2 flex-col items-start justify-between">
                <div className={`w-full h-px relative -top-px transition-transform duration-500 ${mobileMenuOpen ? 'transform rotate-45 translate-y-1' : 'transform rotate-0'}`}>
                  <div className={`w-full h-0.5 ${mobileMenuOpen || !scrolled ? 'bg-white' : 'bg-grey-900'}`}></div>
                </div>
                <div className={`w-full h-px transition-transform duration-500 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : 'transform rotate-0'}`}>
                  <div className={`w-full h-0.5 ${mobileMenuOpen || !scrolled ? 'bg-white' : 'bg-grey-900'}`}></div>
                </div>
              </div>
            </button>
          </div>

        </div>

        {/* 4. THE DESKTOP MEGA MENU DROPDOWN */}
        {/* We mount it when a menu is active, positioned absolutely below the navbar */}
        <div 
          className={`absolute top-[80px] left-1/2 -translate-x-1/2 w-max bg-white rounded-[2rem] p-8 shadow-2xl z-40 flex gap-12 transition-all duration-300 transform origin-top
            ${activeMenu ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
        >
          {activeMenu && megaMenus[activeMenu] && (
            <>
              {/* Left Side: Dynamic Text Columns */}
              <div className="flex gap-16">
                {megaMenus[activeMenu].columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col">
                    {/* Header Title (if exists, e.g., "Core Services") */}
                    <div className="h-8">
                      <div className="text-grey-300 text-sm font-medium tracking-tight mb-2">
                        {col.title}
                      </div>
                    </div>
                    
                    {/* The Links */}
                    <div className="flex flex-col gap-y-2 mt-1">
                      {col.links.map((link, linkIdx) => (
                        <div 
                          key={linkIdx} 
                          className="relative overflow-hidden group cursor-pointer"
                          onMouseEnter={() => setActiveImage(link.image)}
                        >
                          <Link href="#" className="block text-2xl font-medium tracking-tight text-grey-900 transition-transform duration-300 group-hover:-translate-y-8">
                            {link.label}
                          </Link>
                          {/* Ghost duplicate for the slide-up animation effect */}
                          <Link href="#" className="absolute top-0 left-0 text-2xl font-medium tracking-tight text-grey-900 transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                            {link.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side: The Dynamic Image Viewer */}
              <div className="w-[320px] h-[320px] rounded-2xl overflow-hidden relative shrink-0 bg-grey-100">
                {/* We map over ALL images so they crossfade smoothly using opacity */}
                {getActiveMenuImages().map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt="Menu Feature"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImage === img ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}

                {/* Optional Bottom Overlay Button (e.g., "View All Services") */}
                {megaMenus[activeMenu].action && (
                  <div className="absolute bottom-5 left-5 z-20">
                    <Link href="#" className="bg-grey-900 text-white px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition hover:scale-105">
                      {megaMenus[activeMenu].action} <span className="text-xs">↗</span>
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </header>

      {/* Background Dimmer when Mega Menu is Open */}
      <div 
        className={`fixed top-0 left-0 w-screen h-svh z-30 transition-all duration-300 pointer-events-none
          ${activeMenu ? 'backdrop-blur-sm bg-white/10' : ''}`}
      />

      {/* Full Screen Mobile Menu Overlay (Unchanged) */}
      <div className={`w-full h-svh fixed top-0 left-0 z-40 transition-all duration-700 p-2 backdrop-blur-sm lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-full h-full bg-grey-900/95 rounded-3xl px-4 py-24 flex flex-col items-start justify-between">
            <nav className="flex flex-col gap-y-6 w-full">
                {['Services', 'Industries', 'International', 'About', 'Work'].map((item) => (
                  <div key={item} className="flex items-center justify-between w-full border-b border-white/10 pb-4">
                    <Link href="#" className="text-white text-4xl tracking-tight font-medium">{item}</Link>
                    <span className="text-white">↓</span>
                  </div>
                ))}
            </nav>
            <Link href="#" className="w-full mt-8 flex justify-center gap-x-2 items-center font-sans-primary font-medium px-6 py-4 rounded-3xl bg-white text-grey-900">
              <span>Get in touch</span>
              <span className="text-xs mt-1">↗</span>
            </Link>
        </div>
      </div>
    </>
  );
}