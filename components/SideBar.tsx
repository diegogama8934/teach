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
        `bg-white p-4 flex flex-col h-screen items-center justify-between transition-all z-10  absolute rounded
        ${isOpen ? "w-56" : "w-20"}
        ${isOpen ? "shadow-xl" : ""}`
      }
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`flex flex-col gap-4 w-full`}>
        <div className="w-10 h-10 flex justify-center items-center">
          <span className="material-symbols-rounded !text-green-800">cast_for_education</span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          {
            mainPages.map(({ href, icon, name }) => (
              <Link
                key={href}
                href={href}
                className={`
                  h-12 text-center p-3 rounded-md flex justify-start  w-full items-center 
                  ${pathName.includes(href) ? "bg-primaryColor hover:bg-primaryColor/90" : "hover:bg-zinc-200"}
                `}
              >
                <span className={`
                  material-symbols-rounded 
                  ${pathName.includes(href) ? "!text-zinc-50" : "!text-primaryColor"}
                `}>
                  {icon}
                </span>
                <span className={`
                  ml-4 line-clamp-1 font-bold 
                  ${isOpen ? "inline-block" : "hidden"}
                  ${pathName.includes(href) ? "text-zinc-50" : "text-primaryColor"}
                `}>
                  {name}
                </span>
              </Link>
            ))
          }
        </div>
      </div>
      <Link href="home/settings" className="h-10 text-center p-3 rounded-md hover:bg-zinc-200 flex justify-start  w-full items-center">
        <span className="material-symbols-rounded !text-green-800">settings</span>
        <span className={`ml-4 line-clamp-1 text-primaryColor font-bold ${isOpen ? "inline-block" : "hidden"}`}>Configuración</span>
      </Link>
    </aside>
  );
}