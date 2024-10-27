import { notFound } from "next/navigation";
import { eachDayOfInterval } from "date-fns";

import { supabase } from "@/app/_lib/supabase";

// Query function for getting the cabin via ID
export async function getCabin(id) {
  // Running the query
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  // Error handling
  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

// Query function for getting the cabin price via ID
export async function getCabinPrice(id) {
  // Running the query
  const { data, error } = await supabase
    .from("cabins")
    .select("regularPrice, discount")
    .eq("id", id)``.single();

  // Error handling
  if (error) {
    console.error(error);
  }

  return data;
}

// Query function for getting all the cabins
export const getCabins = async function () {
  // Running the query
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  // Error handling
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

// Query function for getting the guest via email
export async function getGuest(email) {
  // Running the query
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

// Query function for getting the booking via ID
export async function getBooking(id) {
  // Running the query
  const { data, error, count } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  // Error handling
  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

// Query function for getting all of the guest's booking via guest ID
export async function getBookings(guestId) {
  // Running the query
  const { data, error } = await supabase
    .from("bookings")
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)"
    )
    .eq("guestId", guestId)
    .order("startDate");

  // Error handling
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Query function for getting all the booked dates of the cabin via ID
export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Running the query (getting all the bookings)
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  // Error handling
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

// Query function for getting the settings
export async function getSettings() {
  // Running the query
  const { data, error } = await supabase.from("settings").select("*").single();

  // Error handling
  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

// Function for getting all the countries
export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

// Query function for creating the new guest if logged for the first time
export async function createGuest(newGuest) {
  // Running the query
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  // Error handling
  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}
