import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { auth } from "@/app/_lib/auth";

async function Header() {
  // Getting the session from auth
  const session = await auth();

  // Returned JSX
  return (
    <header className="border-b border-primary-900 px-8 py-5 sm:px-5 sm:py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation session={session} />
      </div>
    </header>
  );
}

export default Header;
