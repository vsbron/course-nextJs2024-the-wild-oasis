"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ButtonProps } from "@/app/_lib/types";

function Filter() {
  // Getting the current search params, router object & current path using hooks
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Filter button handler function
  function handleFilter(filter: string) {
    // Setting the new params
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    // Changing the actual URL for the user
    router.replace(`${pathname}?${params.toString()}`, { scroll: false }); // Cancelling the scroll on url change
  }

  // Getting the current searchParams value
  const activeFilter = searchParams.get("capacity") ?? "all";

  // Returned JSX
  return (
    <div className="border border-primary-800 flex sm:text-sm">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1-3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4-7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8-12 guests
      </Button>
    </div>
  );
}

// Separate Button component
function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  // Returned JSX
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter && "bg-primary-700 text-primary-50"
      } sm:px-3`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
