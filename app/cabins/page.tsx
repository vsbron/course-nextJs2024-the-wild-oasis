import { Suspense } from "react";

import CabinList from "@/app/_components/CabinList";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";
import Spinner from "@/app/_components/Spinner";
import { CabinsPageParams } from "@/app/_lib/types";

// Opting out of caching (making the page dynamically) (Not relevant anymore)
// export const revalidate = 3600;

// Setting the meta title
export const metadata = {
  title: "Cabins",
};

async function Page({ searchParams }: CabinsPageParams) {
  // Creating filter const based on the URL search params
  const filter = searchParams?.capacity ?? "all";

  // Returned JSX
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium sm:text-3xl">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

export default Page;
