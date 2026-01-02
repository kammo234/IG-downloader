import { InstagramVideoForm } from "@/features/instagram/components/form";
import { Montserrat, Inter } from "next/font/google";

// Fonts
const fontHeading = Montserrat({ subsets: ["latin"], weight: "700", variable: "--font-heading" });
const fontText = Inter({ subsets: ["latin"], weight: "400", variable: "--font-text" });

export default function HomePage() {
  return (
    <div className="flex flex-col py-12 px-4 sm:px-6 md:px-8">
      {/* Stylish Gradient Heading */}
      <h1
        className={`mb-10 text-center text-5xl sm:text-6xl tracking-tight
                    bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400
                    bg-clip-text text-transparent drop-shadow-xl ${fontHeading.variable} font-sans`}
      >
        Instagram Reels Downloader
      </h1>

      <section className="flex flex-col items-center justify-center gap-6">
        <p
          className={`text-center text-gray-700 dark:text-gray-200 text-lg sm:text-xl
                      max-w-2xl leading-relaxed ${fontText.variable} font-sans`}
        >
          Download Instagram Reels and videos easily with just a link. Fast, reliable, and free for everyone.
        </p>

        {/* Downloader Form */}
        <InstagramVideoForm />
      </section>
    </div>
  );
}
