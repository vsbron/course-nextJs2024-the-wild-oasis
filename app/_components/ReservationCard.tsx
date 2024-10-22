import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

import DeleteReservation from "@/app/_components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

import { ReservationCardProps } from "../_lib/types";

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }: ReservationCardProps) {
  // Destructuring the booking data
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins: { name, image },
  } = booking;

  // Returned JSX
  return (
    <div className="grid grid-cols-[8rem_1fr_100px] md:grid-cols-[8rem_1fr] sm:grid-cols-[7rem_1fr] xs:grid-cols-1 border border-primary-800">
      <div className="relative w-auto xs:w-full xs:h-40">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-5 py-3 flex flex-col sm:px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[1.2rem] font-semibold md:text-[1.1rem]">
            {numNights} nights in Cabin {name}{" "}
            <span className="text-base lg:block lg:-mt-1">
              (
              {isToday(new Date(startDate))
                ? "Today"
                : formatDistanceFromNow(startDate)}
              )
            </span>
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-5 pt-1 px-3 xl:px-2 mb-1 uppercase text-xs font-bold flex items-center rounded-sm lg:hidden">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-5 pt-1 px-3 xl:px-2 mb-1 uppercase text-xs font-bold flex items-center rounded-sm lg:hidden">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300 lg:text-base">
          <span className="hidden lg:inline">From: </span>
          {format(new Date(startDate), "EEE, MMM dd yyyy")}
          <span className="lg:hidden"> &mdash; </span>
          <span className="hidden lg:inline">
            <br />
            To:{" "}
          </span>
          {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-4 mt-auto items-baseline lg:flex-wrap lg:gap-y-0 lg:mt-1">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-xl xl:text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary-400 lg:m-0 md:text-[.8rem]">
            Booked {format(new Date(created_at), "MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800 w-[100px] md:col-span-2 md:w-auto md:flex-row md:border-0 md:grid md:grid-cols-2 xs:col-span-1">
        {!isPast(startDate) && (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 md:py-2 md:justify-center md:border-0 md:border-t md:border-r"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
