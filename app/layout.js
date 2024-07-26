import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

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
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen bg-blue-900`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>&copy;{new Date().getFullYear()} by The Wild Oasis</footer>
      </body>
    </html>
  );
}
