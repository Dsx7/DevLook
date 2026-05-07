"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "digital-pr",
    name: "Digital PR",
    image: "/Screenshot-2025-06-23-at-22.39.35.webp",
    column: "left",
  },
  {
    id: "organic-social-content",
    name: "Organic Social & Content",
    image: "/WhatsApp-Image-2025-06-03-at-08.34.50.webp",
    column: "right",
  },
  {
    id: "search-growth-strategy",
    name: "Search & Growth Strategy",
    image: "/0B5A6875.webp",
    column: "left",
  },
  {
    id: "content-experience",
    name: "Content Experience",
    image: "/IMG_5079.webp",
    column: "right",
  },
  {
    id: "data-insights",
    name: "Data & Insights",
    image: "/data.webp",
    column: "left",
  },
  {
    id: "onsite-seo",
    name: "Onsite SEO",
    image: "/Screenshot-2025-06-23-at-23.16.14.webp",
    column: "right",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 15L15 5M8 5H15V12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlipText({ text, active, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <span
        className={`block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          active ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {text}
      </span>
      <span
        className={`absolute left-0 top-0 block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          active ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

function MobileServiceRow({ service }) {
  return (
    <Link
      href="#services"
      className="flex items-center gap-4 border-b border-grey-200 py-6 text-grey-900"
    >
      <div className="relative h-[5.1rem] w-[5.1rem] shrink-0 overflow-hidden rounded-2xl bg-black/5">
        <img src={service.image} alt={service.name} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[2.05rem] font-medium leading-[0.92] tracking-tight">{service.name}</div>
      </div>
    </Link>
  );
}

function DesktopServiceRow({ service, active, onEnter }) {
  return (
    <Link
      href="#services"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className="group relative flex min-h-[6.35rem] items-center overflow-hidden rounded-full px-6 py-3 text-grey-900 transition-all duration-300 xl:min-h-[6.9rem] xl:px-7"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(17,18,18,0.35),rgba(17,18,18,0.35)), url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-grey-200 transition-opacity duration-300 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`relative z-10 mr-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          active
            ? "scale-100 border-white/28 bg-white/6 text-white opacity-100"
            : "scale-90 border-transparent text-transparent opacity-0"
        }`}
      >
        <ArrowIcon className="h-5 w-5" />
      </div>

      <FlipText
        text={service.name}
        active={active}
        className={`relative z-10 text-[2.3rem] font-medium leading-none tracking-tight xl:text-[2.85rem] ${
          active ? "text-white" : "text-grey-900"
        }`}
      />
    </Link>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const desktopLeft = services.filter((service) => service.column === "left");
  const desktopRight = services.filter((service) => service.column === "right");

  return (
    <section id="services" className="px-4 pb-10 pt-4 sm:px-7 lg:pb-18">
      <div className="mx-auto max-w-400">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-245">
              <h2 className="flex max-w-117.5 flex-wrap items-center gap-x-3 gap-y-2 text-[3.7rem] font-medium leading-[0.88] tracking-tight text-grey-900 sm:max-w-none sm:text-[5.4rem] lg:text-[7.4rem]">
                <span>Our</span>
                <span className="relative inline-block h-[0.78em] w-[0.78em] overflow-hidden rounded-[0.18em] bg-black/10">
                  <img
                    src="/Screenshot-2025-06-23-at-23.14.49.webp"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </span>
                <span>Services</span>
              </h2>
            </div>

            <Link
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-5 text-[1.05rem] font-medium tracking-tight text-grey-900 shadow-[0_10px_30px_rgba(17,18,18,0.06)] sm:w-max sm:px-7 sm:py-3.5"
            >
              <span>View All Services</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:hidden">
            {services.map((service) => (
              <MobileServiceRow key={service.id} service={service} />
            ))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="space-y-2" onMouseLeave={() => setActiveService(null)}>
              {desktopLeft.map((service) => (
                <DesktopServiceRow
                  key={service.id}
                  service={service}
                  active={activeService === service.id}
                  onEnter={() => setActiveService(service.id)}
                />
              ))}
            </div>

            <div className="space-y-2" onMouseLeave={() => setActiveService(null)}>
              {desktopRight.map((service) => (
                <DesktopServiceRow
                  key={service.id}
                  service={service}
                  active={activeService === service.id}
                  onEnter={() => setActiveService(service.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden pb-10 pt-14 sm:mt-24 lg:mt-28 lg:pb-16">
          <div className="absolute left-0 top-[14%] hidden overflow-hidden rounded-[2rem] sm:block">
            <img
              src="/Screenshot-2025-06-23-at-14.43.56.webp"
              alt=""
              className="h-48 w-48 object-cover lg:h-56 lg:w-56"
            />
          </div>

          <div className="relative text-center">
            <h3 className="text-[4.6rem] font-medium leading-[0.88] tracking-tight text-grey-900 sm:text-[7.5rem] lg:text-[11rem] xl:text-[13rem]">
              Not Algorithms
            </h3>

            <Link
              href="#footer"
              className="absolute left-1/2 top-[38%] inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-mint px-6 py-4 text-base font-medium tracking-tight text-grey-900 shadow-[0_18px_45px_rgba(17,18,18,0.08)]"
            >
              <span>Send Us Your Brief</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-[4.5rem] text-center text-xl font-medium tracking-tight text-grey-900 sm:mt-20 sm:text-2xl">
            Legacy In The Making
          </div>
        </div>
      </div>
    </section>
  );
}
