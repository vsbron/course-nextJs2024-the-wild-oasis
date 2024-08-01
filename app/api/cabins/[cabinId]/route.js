import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

/* API ENDPOINT */
// Not really useful because of new Server Actions

// Response for GET request
export async function GET(request, { params }) {
  // Getting the cabinId from params
  const { cabinId } = params;

  // Try to fetch the cabin data and its booked dates
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    // Return error message if no data returned
    return Response.json({ message: "Cabin not found" });
  }
}

// Other potential requests
// export async function POST() {}
// export async function PUT() {}
// export async function PATCH() {}
// export async function DELETE() {}
