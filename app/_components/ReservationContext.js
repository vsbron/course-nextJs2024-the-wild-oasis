"use client";
import { createContext, useContext, useState } from "react";

// Creating the Context
const ReservationContext = createContext();

// Creating the initial state
const initialState = { from: undefined, to: undefined };

// Setting the provider with children
function ReservationProvider({ children }) {
  // Setting the state for the range
  const { range, setRange } = useState(initialState);

  // Helper function to reset the range
  const resetRange = () => setRange(initialState);

  // Returned JSX
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

// Creating the custom hook
function useReservation() {
  // Getting the context object
  const context = useContext(ReservationContext);

  // Guard clause
  if (context === undefined)
    throw new Error("Context was used outside provider"); // Throwing error

  // Returning the context
  return context;
}

export { ReservationProvider, useReservation };
