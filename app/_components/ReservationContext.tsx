"use client";
import { createContext, useContext, useState } from "react";

import {
  RangeType,
  ReservationContextType,
  ReservationProviderProp,
} from "@/app/_lib/types";

// Creating the initial state
const initialState: RangeType = { from: undefined, to: undefined };

// Creating the Context
const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

// Setting the provider with children
function ReservationProvider({ children }: ReservationProviderProp) {
  // Setting the state for the range
  const [range, setRange] = useState<RangeType>(initialState);

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
