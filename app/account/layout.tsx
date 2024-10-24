import SideNavigation from "@/app/_components/SideNavigation";
import { MainLayoutProps } from "../_lib/types";

function Layout({ children }: MainLayoutProps) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12 lg:grid-cols-[12rem_1fr] sm:grid-cols-[2.75rem_1fr] lg:gap-8">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
