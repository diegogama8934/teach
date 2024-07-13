import { ReactNode } from "react";
import { SideBar } from "@/components/SideBar";

export default function HomeLayout({ children }: { children: ReactNode }) {


  return (
    <div className="flex relative">

      <SideBar />

      <div className="flex flex-col flex-1 p-4 gap-4 h-screen overflow-auto ml-20">
        {children}
      </div>

    </div>
  );
}