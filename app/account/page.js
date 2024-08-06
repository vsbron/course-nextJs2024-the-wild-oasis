import { auth } from "../_lib/auth";

// Meta title
export const metadata = {
  title: "Account",
};

async function Page() {
  // Getting the session from auth
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  // Returned JSX
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7 sm:text-xl">
      Welcome, {firstName}
    </h2>
  );
}

export default Page;
