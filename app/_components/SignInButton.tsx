import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  // Returned JSX
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-4 text-lg border border-primary-300 px-10 py-4 font-medium">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          height={24}
          width={24}
          className="mb-1"
          alt="Google logo"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
