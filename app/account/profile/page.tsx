import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  // Getting the session and the guest data
  const session = await auth();
  const guest = await getGuest(session!.user!.email as string);

  // Returned JSX
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4 sm:text-xl">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200 sm:text-base">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 -mt-4 text-primary-800 w-full shadow-sm rounded-sm sm:px-3 sm:pt-2.5 sm:pb-2 sm:text-[1rem]"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
