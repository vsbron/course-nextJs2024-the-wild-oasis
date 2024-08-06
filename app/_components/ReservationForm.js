"use client";
import Image from "next/image";
import { differenceInDays } from "date-fns";

import { createReservation } from "@/app/_lib/actions";
import { useReservation } from "./ReservationContext";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  // Getting the range state and resetRange from the custom hook
  const { range, resetRange } = useReservation();

  // Destructuring cabin and calculating some variables
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const startDate = range?.from;
  const endDate = range?.to;
  const numNights = Math.abs(differenceInDays(startDate, endDate));
  const cabinPrice = numNights * (regularPrice - discount);

  // Assigning all the values we need that out of the form
  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  // Binding the values object to a server action function
  const createReservationWithData = createReservation.bind(null, bookingData);

  // Returned JSX
  return (
    <div>
      <div className="bg-primary-800 text-primary-300 px-12 py-2 flex justify-between items-center xl:px-8 sm:px-5">
        <p>Logged in as {user.name}</p>
      </div>

      <form
        className="bg-primary-900 py-10 px-12 text-lg flex gap-5 flex-col min-h-[390px] lg:min-h-0 xl:px-8 sm:px-5"
        action={async (formData) => {
          await createReservationWithData(formData);
          resetRange();
        }}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel={"Reserving..."}>
              Reserve now
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
