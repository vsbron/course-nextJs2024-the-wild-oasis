import { auth } from "@/app/_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { CabinObject } from "@/app/_lib/types";

import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }: { cabin: CabinObject }) {
  // Getting the session from auth
  const session = await auth();

  // Fetching the booked dates and the settings
  const [settings, bookedDates] = await Promise.all([
    await getSettings(),
    await getBookedDatesByCabinId(cabin.id),
  ]);

  // Returned JSX
  return (
    <div className="grid grid-cols-2 border-primary-800 min-h-[400px] xl:grid-cols-[1fr_.8fr] lg:flex lg:flex-col lg:max-w-[540px] lg:items-center lg:m-auto lg:gap-12">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
