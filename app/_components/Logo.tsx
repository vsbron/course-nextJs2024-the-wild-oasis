import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo() {
  // Returned JSX
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <div className="h-[60px] relative aspect-square sm:h-10">
        <Image
          src={logo}
          className="object-cover"
          fill
          quality={100}
          alt="The Wild Oasis logo"
        />
      </div>
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
