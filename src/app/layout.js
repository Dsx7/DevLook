import "./globals.css";
import GlobalSmoothScroll from "@/components/GlobalSmoothScroll";

export const metadata = {
  title: "Rise at Seven | Award Winning Search-First Content Marketing Agency",
  description:
    "Rise at Seven is a search-first content marketing agency with offices in London, Sheffield, Manchester and New York that specialises in SEO, Digital PR and content marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-grey-100 font-sans-primary text-grey-900 antialiased">
        <GlobalSmoothScroll />
        {children}
      </body>
    </html>
  );
}
