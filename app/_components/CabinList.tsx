import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
import { CabinFilter } from "@/app/_lib/types";

async function CabinList({ filter }: CabinFilter) {
  // Getting the cabins data from supabase
  const cabins = await getCabins();

  // Guard clause
  if (!cabins.length) return null;

  // Filtering Cabins based on the passed filter
  let displayedCabins;
  switch (filter) {
    case "small":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
      break;
    case "medium":
      displayedCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
      );
      break;
    case "large":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
      break;
    default:
      displayedCabins = cabins;
  }

  // Returned JSX
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
