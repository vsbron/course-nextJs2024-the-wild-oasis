export type RootLayoutProp = {
  children: React.ReactNode;
};

export type ErrorProps = {
  error: Error;
  reset: () => void;
};

export interface SearchParams {
  [key: string]: any;
}
