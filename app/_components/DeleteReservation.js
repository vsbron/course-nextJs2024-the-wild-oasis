"use client";
import { useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  // Getting the transition status and startTransition function from the hook
  const [isPending, startTransition] = useTransition();

  // Delete handler
  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => onDelete(bookingId));
  }

  // Returned JSX
  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
