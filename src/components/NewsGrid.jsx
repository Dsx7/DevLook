import Link from "next/link";

const stories = [
  {
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    category: "News",
    author: "Carrie Rose",
    time: "2 mins",
    image: "/0B5A7487.webp",
    authorImage: "/WhatsApp-Image-2025-06-23-at-22.50.52.webp",
  },
  {
    title:
      "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
    category: "",
    author: "Ray Saddiq",
    time: "2 mins",
    image: "/Screenshot-2026-02-07-at-17.01.43.webp",
    authorImage: "/WhatsApp-Image-2025-06-03-at-08.34.50.webp",
  },
  {
    title: "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
    category: "",
    author: "Carrie Rose",
    time: "2 mins",
    image: "/Screenshot-2025-07-04-at-12.50.54.webp",
    authorImage: "/WhatsApp-Image-2025-06-23-at-22.50.52.webp",
    searchTag: "Freeze Dried Sweets",
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

export default function NewsGrid() {
  return (
    <section id="news" className="px-4 pb-[4.5rem] pt-6 sm:px-7 lg:pb-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[3.9rem] font-medium leading-[0.9] tracking-tight text-grey-900 sm:text-[5.6rem] lg:text-[7.5rem]">
            <span>What's</span>
            <span className="relative inline-block h-[0.8em] w-[0.8em] overflow-hidden rounded-[0.18em] bg-black/10">
              <img src="/maxresdefault_2025-10-22-141838_nmnu.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
            </span>
            <span>New</span>
          </h2>

          <Link
            href="#footer"
            className="inline-flex w-max items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium tracking-tight text-grey-900 shadow-[0_10px_30px_rgba(17,18,18,0.06)]"
          >
            <span>Explore More Thoughts</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-7 h-px bg-grey-200" />

        <div className="mt-9 grid gap-7 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Link key={story.title} href="#news" className="group block">
              <article>
                <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_18px_50px_rgba(17,18,18,0.06)]">
                  <div className="absolute left-5 top-5 z-10 rounded-full bg-white/20 px-3 py-2 text-sm font-medium tracking-tight text-white backdrop-blur-md">
                    {story.category}
                  </div>

                  {story.searchTag ? (
                    <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm font-medium tracking-tight text-grey-900 lg:inline-flex lg:items-center lg:gap-2">
                      <span>{story.searchTag}</span>
                      <ArrowIcon className="h-4 w-4" />
                    </div>
                  ) : null}

                  <div className="relative aspect-[1/1.02] overflow-hidden rounded-[1.7rem] bg-grey-100">
                    <img
                      src={story.image}
                      alt={story.title}
                      className={`h-full w-full object-cover transition-transform duration-700 ${index === 0 ? "group-hover:scale-105 group-hover:blur-md" : "group-hover:scale-[1.04]"
                        }`}
                    />

                    {index === 0 ? (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-mint text-grey-900 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                          <ArrowIcon className="h-10 w-10" />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1.5 text-sm font-medium tracking-tight text-grey-300">
                    <span className="inline-flex h-6 w-6 overflow-hidden rounded-full">
                      <img src={story.authorImage} alt={story.author} className="h-full w-full object-cover" />
                    </span>
                    <span>{story.author}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium tracking-tight text-grey-300">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M10 5.5V10L13 12M17 10A7 7 0 113 10a7 7 0 0114 0z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{story.time}</span>
                  </div>
                </div>

                <h3 className="mt-3 max-w-[92%] text-[2rem] font-medium leading-[0.92] tracking-tight text-grey-900 sm:max-w-[85%] lg:max-w-full lg:text-[2.15rem]">
                  {story.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
