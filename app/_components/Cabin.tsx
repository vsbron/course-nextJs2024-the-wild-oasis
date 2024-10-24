import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

import TextExpander from "@/app/_components/TextExpander";
import { CabinProps } from "@/app/_lib/types";

function Cabin({ cabin }: CabinProps) {
  // Destructuring the Cabin props
  const { name, maxCapacity, image, description } = cabin;

  // Returned JSX
  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24 lg:gap-16 lg:px-4 lg:grid-cols-[3fr_5fr] md:gap-8 sm:flex sm:flex-col sm:p-0 sm:gap-8">
      <div className="relative scale-[1.15] -translate-x-3 sm:h-80 sm:scale-100 sm:translate-x-0">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="sm:px-8 sm:py-3 xs:px-4">
        <h3 className="text-accent-100 font-black inline-block text-7xl mb-5 translate-x-[-50%] bg-primary-950 p-6 pb-1 lg:text-5xl md:translate-x-[-25%] sm:translate-x-0 sm:p-0 sm:text-4xl">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10 lg:text-base">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg lg:text-base">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg lg:text-base">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg lg:text-base">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
