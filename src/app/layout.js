import "./globals.css";

export const metadata = {
  title: "Rise at Seven | Award Winning Search-First Content Marketing Agency",
  description: "Rise at Seven is a search-first content marketing agency with offices in London, Sheffield, Manchester & New York that specialises in SEO, Digital PR, content marketing and Influencer.",
  icons: {
    icon: "/favicon.ico", // Ensure you download their favicon and put it in /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
        1. bg-grey-100 applies their exact off-white background to the whole site.
        2. font-sans-primary applies the 'saans' font we set up in tailwind.config.js.
        3. text-grey-900 sets their default dark text color.
      */}
      <body className="bg-grey-100 font-sans-primary text-grey-900 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}