"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";

// Server action for logging in
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

// Server action for logging out
export async function signOutAction() {
  await signOut({ redirectTo: "/", redirect: true });
}

// Server action for updating the user details
export async function updateGuest(formData) {
  // Getting the session and the guest ID
  const session = await auth();
  const { guestId } = session.user;

  // Guard clause for not logged in users
  if (!session) throw new Error("You must be logged in");

  // Getting the values from formData
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  // Validating the nationalID number
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid National ID");

  // Preparing the updated guest data
  const updateData = { nationality, countryFlag, nationalID };

  // Updating the guest data in the Database by running a query
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", guestId)
    .select()
    .single();

  // Error handler if query wasn't successfull
  if (error) throw new Error("Guest could not be updated");

  // Revalidating path to get rid of caching
  revalidatePath("/account/profile");
}

// Server action for deleting the booking
export async function deleteReservation(bookingId) {
  // Getting the session object
  const session = await auth();

  // Guard clause
  if (!session) throw new Error("You must be logged in");

  // Another guard clause to check whether an individual tries to delete someone's booking
  const guestBookings = await getBookings(session.user.guestId); // Get all the bookings from current user
  const guestBookingsIds = guestBookings.map((booking) => booking.id); // Map over them and get the IDs
  // If the IDs do not have the ID we try to delete - throw error
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  // Running a query
  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  // Error handling
  if (error) throw new Error("Booking could not be deleted");

  // Revalidating path to get rid of caching
  revalidatePath("/account/reservations");
}

// Server action for updating the reservation
export async function updateReservation(formData) {
  // Getting the values from formData
  const bookingId = Number(formData.get("bookingId"));

  // Getting the session object
  const session = await auth();

  // Guard clause
  if (!session) throw new Error("You must be logged in");

  // Another guard clause to check whether an individual tries to edit someone's booking
  const guestBookings = await getBookings(session.user.guestId); // Get all the bookings from current user
  const guestBookingsIds = guestBookings.map((booking) => booking.id); // Map over them and get the IDs

  // If the IDs do not have the ID we try to edit - throw error
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to edit this booking");

  // Preparing the updated guest data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // Running the query
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // Error handling
  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  // Revalidating path to get rid of caching
  revalidatePath(`/account/reservations/${bookingId}`);
  revalidatePath("/account/reservations");

  // Redirect to the main reservations page
  redirect("/account/reservations");
}
