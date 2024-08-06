import Header from "./_components/Header";

import { ReservationProvider } from "@/app/_components/ReservationContext";

// Setting the font
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });
import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s — The Wild Oasis",
    default: "Welcome to The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beutiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid sm:px-5 sm:py-8">
          <main className="max-w-7xl mx-auto w-full">
            {/* Closing the children inside of Context API provider */}
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
