import { Suspense } from "react";

import Loading from "@/app/loading";
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import { getCabin, getCabins } from "@/app/_lib/data-service";

// Generating the metadata using the fetched data
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

// Telling Next.js ahead of time which params exists (to avoid dynamic rendering)
// export async function generateStaticParams() {
//   const cabins = await getCabins();
//   const ids = cabins.map((cabin) => {
//     cabinId: String(cabin.id);
//   });
//   return ids;
// }

async function Page({ params }) {
  // Getting the cabin data from database
  const cabin = await getCabin(params.cabinId);

  // Returned JSX
  return (
    <div className="max-w-6xl mx-auto mt-8 sm:mt-0">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400 lg:text-4xl xs:text-3xl">
          Reserve {cabin.name} today. <br className="hidden md:inline-block" />Pay on arrival.
        </h2>
        <Suspense fallback={<Loading />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
