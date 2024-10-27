"use client";
import { useOptimistic } from "react";

import ReservationCard from "@/app/_components/ReservationCard";
import { deleteReservation } from "@/app/_lib/actions";
import { ReservationListProps } from "@/app/_lib/types";

function ReservationList({ bookings }: ReservationListProps) {
  // Getting the optimistic state and setter function from useOptimistic hook
  // const [ optimisticState, setter function] = useOptimistic(currentState, update function (takes current state and the attribute we pass to setter function))
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  // Delete handler function that we're going do prop drill
  async function handleDelete(bookingId: string) {
    optimisticDelete(bookingId); // optimistic delete
    await deleteReservation(bookingId); // server action delete
  }

  // Returned JSX
  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
