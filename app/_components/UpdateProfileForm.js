import Image from "next/image";

import { updateGuest } from "@/app/_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
  // Destructuring the guest parameter
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  // Returned JSX
  return (
    <form
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col lg:px-6"
      action={updateGuest}
    >
      <div className="space-y-2">
        <label className="sm:text-base">Full name</label>
        <input
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 sm:px-3 sm:pt-1.5 sm:pb-1 sm:text-[1rem]"
          name="fullName"
          defaultValue={fullName}
        />
      </div>

      <div className="space-y-2">
        <label className="sm:text-base">Email address</label>
        <input
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 sm:px-3 sm:pt-1.5 sm:pb-1 sm:text-[1rem]"
          name="email"
          defaultValue={email}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="sm:text-[1rem]" htmlFor="nationality">Where are you from?</label>
          {countryFlag && (
            <Image
              src={countryFlag}
              width={30}
              height={20}
              className="h-5 rounded-sm"
              alt="Country flag"
            />
          )}
        </div>
      </div>

      {children}

      <div className="space-y-2">
        <label className="sm:text-[1rem]" htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm sm:px-3 sm:pt-1.5 sm:pb-1 sm:text-[1rem]"
          defaultValue={nationalID}
        />
      </div>

      <div className="flex justify-end">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
