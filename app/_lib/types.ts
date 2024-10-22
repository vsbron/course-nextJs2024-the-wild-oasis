// GENERAL
export type RootLayoutProp = {
  children: React.ReactNode;
};
export type ErrorProps = {
  error: Error;
  reset: () => void;
};

// COMPONENT PROPS
export type ButtonProps = {
  filter: CabinSizes | "all";
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: string;
};
export type DeleteReservationProps = {
  bookingId: number;
  onDelete: (bookingId: number) => Promise<void>;
};
export type HamburgerProps = {
  onClick: () => void;
  menuOpen: boolean;
};
export type ReservationCardProps = {
  booking: BookingObject;
  onDelete: (bookingId: number) => Promise<void>;
};

// INTERFACES
export interface BookingObject {
  id: number;
  guestId: number;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  created_at: string;
  cabins: { name: string; image: string };
}
export interface CabinObject {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}
export interface SessionObject {
  user?: {
    name: string;
    email: string;
    image: string;
    guestId: number;
  };
  expires: string;
}

// OTHER
export type CabinFilter = { filter: CabinSizes };

// UNIONS
type CabinSizes = "small" | "medium" | "large";
