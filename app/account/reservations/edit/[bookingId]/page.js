import SubmitButton from "@/app/_components/SubmitButton";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

async function Page({ params }) {
  // Getting the booking ID from params
  const { bookingId } = params;

  // Getting and destructuring the booking and cabin data from database
  const { cabinId, numGuests, observations } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  // Returned JSX
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateReservation}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col lg:px-6"
      >
        {/* Hidden input for passing the ID with the formData to the server action */}
        <input type="hidden" name="bookingId" value={bookingId} />

        <div className="space-y-2">
          <label className="sm:text-base" htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm sm:px-3 sm:pt-1.5 sm:pb-1 sm:text-[1rem]"
            defaultValue={numGuests}
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
          <label className="sm:text-base" htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 resize-none bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm sm:px-3 sm:pt-1.5 sm:pb-1 sm:text-[1rem] sm:h-24"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default Page;
