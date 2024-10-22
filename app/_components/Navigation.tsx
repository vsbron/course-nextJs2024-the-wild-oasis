"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { HamburgerProps, SessionObject } from "../_lib/types";

function Navigation({ session }: { session: SessionObject }) {
  // State of the mobile menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Hamburger click handler
  const clickHandler = () => {
    setMenuOpen((o) => !o);
  };

  // Close menu handler
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Returned JSX
  return (
    <>
      <Hamburger onClick={clickHandler} menuOpen={menuOpen} />
      <nav
        className={`z-10 text-xl sm:fixed sm:inset-0 sm:bg-primary-800 sm:flex sm:justify-center sm:items-center sm:z-30 transition-all ${
          menuOpen
            ? "sm:opacity-1 sm:pointer-events-auto"
            : "sm:opacity-0 sm:pointer-events-none"
        } `}
      >
        <ul className="flex gap-16 items-center lg:gap-8 sm:flex sm:flex-col">
          <li className="hidden sm:block">
            <Link
              href="/"
              className="hover:text-accent-400 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
              onClick={closeMenu}
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="hidden sm:block">
            <div className="border-none h-[2px] bg-primary-50 w-32" />
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
                onClick={closeMenu}
              >
                <Image
                  src={session.user.image}
                  width={32}
                  height={32}
                  className="rounded-full mb-1"
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
                <span>Guest area</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
                onClick={closeMenu}
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

// Component for the hamburger
function Hamburger({ onClick, menuOpen }: HamburgerProps) {
  // Returned JSX
  return (
    <div
      className="hidden sm:block relative h-5 w-9 cursor-pointer z-40"
      onClick={onClick}
    >
      <span
        className={`block absolute bg-primary-50 w-full h-[2px] left-0 right-0 origin-center transition-all ${
          menuOpen ? "top-[45%] rotate-45" : "top-0 transform-none"
        }`}
      ></span>
      <span
        className={`block absolute bg-primary-50 w-full h-[2px] left-0 right-0 top-[calc(50%-1px)] transition-all ${
          menuOpen && "opacity-0"
        }`}
      ></span>
      <span
        className={`block absolute bg-primary-50 w-full h-[2px] left-0 right-0 origin-center transition-all ${
          menuOpen
            ? "top-[45%] bottom-auto -rotate-45"
            : "bottom-0 transform-none"
        }`}
      ></span>
    </div>
  );
}

export default Navigation;
