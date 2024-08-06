import SignInButton from "../_components/SignInButton";

// Meta title
export const metadata = {
  title: "Login",
};

function Page() {
  // Returned JSX
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold sm:text-2xl">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}

export default Page;
