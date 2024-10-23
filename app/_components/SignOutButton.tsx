import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  // Returned JSX
  return (
    <form action={signOutAction}>
      <button className="border-t border-primary-900 py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full sm:px-2 sm:flex sm:justify-center">
        <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-primary-600 sm:text-primary-400" />
        <span className="sm:hidden">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
