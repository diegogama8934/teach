"use client"
import Link from "next/link";
import { StudentPages } from "@/constants";
import { mainPages } from "@/constants/pages";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";

export function StudentSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMainSideBarOpen, setIsMainSideBarOpen] = useState(false);
  const pathName = usePathname();
  const params = useParams();

  return (
    <aside
      className={`bg-white absolute h-screen flex transition-all z-10`}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        onMouseOver={() => setIsMainSideBarOpen(true)}
        onMouseLeave={() => setIsMainSideBarOpen(false)}
        className={`
        h-full bg-primaryColor z-20 transition-all delay-[500ms] flex flex-col items-center gap-3 p-3
        ${isMainSideBarOpen ? "w-56" : "w-6"}
        `}
      >
        {
          isMainSideBarOpen && mainPages.map(({ href, icon, name }) => (
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
      <div
        className={`
        bg-white w-16 relative h-full flex flex-col justify-between items-center transition-all z-10 p-3
        ${isOpen ? "w-56 shadow-[0_0_60px_0_rgba(0,0,0,0.1)]" : "w-16"}
      `}
      >
        <div className="flex flex-col gap-3 w-full">
          <Link href="/" target="_blank" className="w-10 h-10 flex justify-center items-center">
            <span className="material-symbols-rounded !text-primaryColor !text-xl">cast_for_education</span>
          </Link>

          {
            StudentPages.map(({ href, icon, name }) => {
              const formmatedHref = href.replace("[subjectId]", params.subjectId as string);
              return (
                <Link
                  key={href}
                  href={formmatedHref}
                  className={`
                h-10 text-center p-2 rounded-md flex justify-center w-full items-center hover:scale-105 transition-all
                ${pathName.includes(formmatedHref) && "bg-primaryColor hover:bg-primaryColor/90"}
                ${isOpen && "!justify-start"}
              `}
                >
                  <span className={`
                  material-symbols-rounded !text-xl
                  ${pathName.includes(formmatedHref) ? "!text-zinc-50 hover:!text-primaryColor" : "!text-primaryColor"}
                `}>
                    {icon}
                  </span>
                  <span className={`
                  ml-4 line-clamp-1 font-medium 
                  ${isOpen ? "inline-block" : "hidden"}
                  ${pathName.includes(formmatedHref) ? "text-zinc-50" : "text-primaryColor"}
                `}>
                    {name}
                  </span>
                </Link>
              )
            })
          }
        </div>

        <Link
          href="home/settings"
          className={`
          h-10 text-center p-2 rounded-md flex justify-start w-full items-center hover:scale-105 transition-all
          ${pathName.includes("home/settings") && "bg-primaryColor hover:bg-primaryColor/90"}
        `}
        >
          <span className={`
          material-symbols-rounded !text-xl
          ${pathName.includes("home/settings") ? "!text-zinc-50 hover:!text-primaryColor" : "!text-primaryColor"}
        `}>settings</span>
          <span className={`
          ml-4 line-clamp-1 font-medium 
          ${isOpen ? "inline-block" : "hidden"}
          ${pathName.includes("home/settings") ? "text-zinc-50" : "text-primaryColor"}
        `}>Configuración</span>
        </Link>
      </div>
    </aside>
  );
}