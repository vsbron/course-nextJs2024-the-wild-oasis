import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border">
      <div className="basis-40 flex-grow relative lg:flex-1 sm:basis-32 xs:basis-28">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-r border-primary-800"
        />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950 sm:px-4 xs:px-3">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3 sm:text-xl">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 mb-1 text-primary-600" />
            <p className="text-lg text-primary-200 sm:text-base">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350] sm:text-xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600 sm:text-sm">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350] sm:text-xl">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200 sm:text-sm">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900 sm:px-4 sm:border-l-0 sm:w-full sm:text-center sm:text-sm"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
