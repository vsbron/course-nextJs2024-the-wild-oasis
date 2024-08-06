"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import SignOutButton from "@/app/_components/SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600 sm:text-primary-400" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600 sm:text-primary-400" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600 sm:text-primary-400" />,
  },
];

function SideNavigation() {
  // Getting the pathname from custom hook
  const pathname = usePathname();

  // Returned JSX
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 text-lg sm:gap-0">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 sm:px-2 sm:flex sm:justify-center ${
                pathname === link.href && "bg-primary-900"
              }`}
              href={link.href}
            >
              {link.icon}
              <span className="sm:hidden">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
