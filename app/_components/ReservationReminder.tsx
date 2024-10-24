"use client";
import { format } from "date-fns";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { useReservation } from "@/app/_components/ReservationContext";

function ReservationReminder() {
  // Getting the range from the custom hook
  const { range, resetRange } = useReservation();

  // Guard clause
  if (!range.from || !range.to) return null;

  // Returned JSX
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex gap-6 items-center w-auto sm:py-3 sm:px-6">
      <p className="w-[280px] xs:w-[200px] xs:text-sm">
        <span>👋</span> Don&apos;t forget to reserve your dates{" "}
        <br className="xs:hidden" /> from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button className="rounded-full p-1 hover:bg-accent-600 transition-all">
        <XMarkIcon className="h-5 w-5" onClick={resetRange} />
      </button>
    </div>
  );
}

export default ReservationReminder;
