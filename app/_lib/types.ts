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

// INTERFACES
export interface CabinObject {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}

// OTHER
export type CabinFilter = { filter: CabinSizes };

// UNIONS
type CabinSizes = "small" | "medium" | "large";
