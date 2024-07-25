import { StudentSideBar } from "@/components/atoms/subject";
import { ReactNode } from "react";

export default function StudentSubjectLayout({ children }: { children: ReactNode }) {


  return (
    <div className="flex relative">
      <StudentSideBar />

      <div className="flex flex-col flex-1 p-4 gap-4 h-screen overflow-auto ml-[88px]">
        {children}
      </div>
    </div>
  );
}