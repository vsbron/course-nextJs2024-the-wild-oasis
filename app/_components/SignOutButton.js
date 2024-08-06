import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="border-t border-primary-900 py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full sm:px-2 sm:flex sm:justify-center">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span className="sm:hidden">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
