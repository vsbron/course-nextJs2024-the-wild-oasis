"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useReservation } from "./ReservationContext";
import { RangeType } from "../_lib/types";

function isAlreadyBooked(range: RangeType, datesArr: Date[]) {
  // Guard clause
  if (range?.from === range?.to) return true;

  // Returned JSX
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from!, end: range.to! })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  // Getting the state and the setter from the custom hook
  const { range, setRange, resetRange } = useReservation();

  // Setting the displayed range (in order to avoid overlapped bookings)
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  // Getting some const variables from cabin and Context API
  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // Destructuring settings
  const { minBookingLength, maxBookingLength } = settings;

  // Returned JSX
  return (
    <div className="flex flex-col justify-between lg:gap-6 lg:w-full">
      <DayPicker
        className="pt-12 self-center lg:pt-8 md:pt-6 sm:pt-4"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px] sm:px-4 xs:h-auto xs:py-2">
        <div className="flex items-baseline gap-6 sm:gap-x-3 sm:gap-y-0 xs:flex-wrap">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl sm:text-xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl sm:text-xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl sm:text-xl sm:px-2">
                <span>&times;</span>
                <span>{numNights}</span>
              </p>
              <p className="xs:border-t xs:border-primary-900 xs:pt-2">
                <span className="text-lg font-bold uppercase sm:text-base xs:text-lg">
                  Total
                </span>{" "}
                <span className="text-2xl font-semibold sm:text-xl xs:text-2xl">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold sm:px-2 xs:px-4"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
