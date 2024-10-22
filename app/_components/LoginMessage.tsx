import Link from "next/link";

function LoginMessage() {
  // Returned JSX
  return (
    <div className="grid bg-primary-800 w-full">
      <p className="text-center text-xl p-12 self-center sm:px-8">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
