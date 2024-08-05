import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

export default function Page() {
  return (
    <div className="h-full pb-16 flex justify-center items-center">
      <div>
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
        />

        <div className="relative z-10 text-center">
          <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal lg:text-7xl md:text-5xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
            Welcome to paradise
          </h1>
          <Link
            href="/cabins"
            className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Explore luxury cabins
          </Link>
        </div>
      </div>
    </div>
  );
}
