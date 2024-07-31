import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  // Fetching the booked dates and the settings
  const [settings, bookedDates] = await Promise.all([
    await getSettings(),
    await getBookedDatesByCabinId(cabin.id),
  ]);

  // Returned JSX
  return (
    <div className="grid grid-cols-2 border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
