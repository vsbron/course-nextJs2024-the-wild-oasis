import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";

// Meta title for the page
export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  // Getting the session and the guest ID
  const session = await auth();
  const guestId = session!.user!.guestId;

  // Fetching the user's bookings data
  const bookings = await getBookings(guestId);

  const adjustedBookings = bookings.map((booking) => ({
    ...booking,
    cabins: booking.cabins[0], // Take the first cabin
  }));

  // Returned JSX
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7 sm:text-xl">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg sm:text-base">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
