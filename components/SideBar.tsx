"use client"
import { mainPages } from "@/constants/pages";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SideBar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isUserInSubject, setIsUserInClass] = useState(false);
  const pathName = usePathname();

  return (
    <aside
      className={
        `bg-primaryColor p-4 flex flex-col h-screen items-center justify-between transition-all z-10  absolute rounded-r-2xl
        ${isOpen ? "w-56" : "w-20"}
        ${isOpen ? "shadow-xl" : ""}`
      }
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`flex flex-col gap-4 w-full`}>
        <div className="w-10 h-10 flex justify-center items-center">
          <span className="material-symbols-rounded !text-white">cast_for_education</span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          {
            mainPages.map(({ href, icon, name }) => (
              <Link
                key={href}
                href={href}
                className={`
                  h-12 text-center p-3 rounded-md flex justify-start  w-full items-center hover:scale-105 transition-all
                  ${pathName.includes(href) && "bg-zinc-50 hover:bg-zinc-100"}
                `}
              >
                <span className={`
                  material-symbols-rounded 
                  ${pathName.includes(href) ? "!text-primaryColor" : "!text-zinc-50 hover:!text-pr"}
                `}>
                  {icon}
                </span>
                <span className={`
                  ml-4 line-clamp-1 font-bold 
                  ${isOpen ? "inline-block" : "hidden"}
                  ${pathName.includes(href) ? "text-primaryColor" : "text-zinc-50"}
                `}>
                  {name}
                </span>
              </Link>
            ))
          }
        </div>
      </div>
      <Link
        href="home/settings"
        className={`
          h-12 text-center p-3 rounded-md flex justify-start  w-full items-center hover:scale-105 transition-all
          ${pathName.includes("home/settings") && "bg-zinc-50 hover:bg-zinc-100"}
        `}
      >
        <span className={`
          material-symbols-rounded 
          ${pathName.includes("home/settings") ? "!text-primaryColor" : "!text-zinc-50 hover:!text-pr"}
        `}>settings</span>
        <span className={`
          ml-4 line-clamp-1 font-bold 
          ${isOpen ? "inline-block" : "hidden"}
          ${pathName.includes("home/settings") ? "text-primaryColor" : "text-zinc-50"}
        `}>Configuración</span>
      </Link>
    </aside>
  );
}