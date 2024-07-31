"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  // Getting the current search params, router object & current path using hooks
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Filter button handler function
  function handleFilter(filter) {
    // Setting the new params
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    // Changing the actual URL for the user
    router.replace(`${pathname}?${params.toString()}`, { scroll: false }); // Cancelling the scroll on url change
  }

  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("small")}
      >
        1-3 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("medium")}
      >
        4-7 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("large")}
      >
        8-12 guests
      </button>
    </div>
  );
}

export default Filter;
