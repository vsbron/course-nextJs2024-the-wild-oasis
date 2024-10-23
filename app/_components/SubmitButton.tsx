"use client";

import { useFormStatus } from "react-dom";
import { SubmitButtonProps } from "../_lib/types";

function SubmitButton({ children, pendingLabel }: SubmitButtonProps) {
  // Getting the form status (pending) from the React DOM hook
  const { pending } = useFormStatus();

  // Returned JSX
  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 sm:px-6 sm:py-3 sm:text-[1rem]"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
export default SubmitButton;
