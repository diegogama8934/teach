"use client"
import { mainPages } from "@/constants/pages";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SideBar() {

  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <aside
      className={
        `bg-primaryColor p-3 flex flex-col h-screen items-center justify-between transition-all z-10  absolute
        ${isOpen ? "w-56 shadow-[0_0_60px_0_rgba(0,0,0,0.6)]" : "w-16"}`
      }
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`flex flex-col gap-4 w-full`}>
        <Link href="/" target="_blank" className="w-10 h-10 flex justify-center items-center">
          <span className="material-symbols-rounded !text-white !text-xl">cast_for_education</span>
        </Link>
        <div className="flex flex-col gap-3 w-full">
          {
            mainPages.map(({ href, icon, name }) => (
              <Link
                key={href}
                href={href}
                className={`
                  h-10 text-center p-2 rounded-md flex justify-center w-full items-center hover:scale-105 transition-all
                  ${pathName.includes(href) && "bg-zinc-50 hover:bg-zinc-100"}
                  ${isOpen && "!justify-start"}
                `}
              >
                <span className={`
                  material-symbols-rounded !text-xl
                  ${pathName.includes(href) ? "!text-primaryColor" : "!text-zinc-50 hover:!text-pr"}
                `}>
                  {icon}
                </span>
                <span className={`
                  ml-4 line-clamp-1 font-medium 
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
          material-symbols-rounded !text-xl
          ${pathName.includes("home/settings") ? "!text-primaryColor" : "!text-zinc-50 hover:!text-pr"}
        `}>settings</span>
        <span className={`
          ml-4 line-clamp-1 font-medium 
          ${isOpen ? "inline-block" : "hidden"}
          ${pathName.includes("home/settings") ? "text-primaryColor" : "text-zinc-50"}
        `}>Configuración</span>
      </Link>
    </aside>
  );
}