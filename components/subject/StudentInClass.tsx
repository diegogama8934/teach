"use client"
import { useState } from "react";
import { user } from "@/interfaces";
import Image from "next/image";

export const StudentInClass = ({email, fullname, profileImage}:user) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="p-4 bg-zinc-50 flex justify-between items-center rounded-lg hover:bg-zinc-100 cursor-pointer transition-all" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4">
          <Image
            src={profileImage}
            width={40}
            height={40}
            alt="Foto de perfil de alumno"
            className="w-10 aspect-square object-cover rounded-full"
          />
          <div className="flex flex-col">
            <span>{fullname}</span>
            <small className="text-zinc-400">{email}</small>
          </div>
        </div>
        <div>
          <span className="material-symbols-rounded mt-2">keyboard_arrow_down</span>
        </div>
      </div>

      <div className={`${isOpen ? "flex" : "hidden"}`}>
        Dividir información por periodos ?
      </div>
    </>
  )
}
