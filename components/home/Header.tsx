"use client"
import Image from "next/image";
import { dropdownButtons } from "@/constants";
import React, { useState, useContext, ReactNode } from "react";
import { UserContext } from "@/context/UserContext";

interface Props {
  title: string, 
  primaryAction: ReactNode, 
  secondaryAction?: ReactNode
}

export function Header({title, primaryAction, secondaryAction}: Props) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <header className="flex justify-between items-center">

      <h1 className="text-4xl font-extralight text-[#888888]">{title}</h1>

      <div className="flex gap-2">

        {secondaryAction}

        {primaryAction}
        <div className="relative">
          <button
            className="flex gap-2 items-center rounded-md hover:scale-110 hover:cursor-pointer transition-all"
            onClick={() => setIsDropdownOpen(prev => !prev)}
          >
            <Image
              src="/yo3.jpeg"
              width={40}
              height={40}
              alt="Foto de perfil"
              className="aspect-square object-cover rounded-full"
            />
          </button>
          {isDropdownOpen && <Dropdown />}
        </div>
      </div>
    </header>
  );
}

function Dropdown() {

  const { logout } = useContext(UserContext);

  return (

    <div className={`
      flex flex-col w-60 absolute bg-zinc-100 top-14 right-0 shadow-2xl rounded-2xl p-4 gap-2
      `}
    >
      <div className="flex gap-4 items-center">
        <Image
          src="/yo3.jpeg"
          width={36}
          height={36}
          alt="Foto de perfil"
          className="aspect-square object-cover rounded-full"
        />
        <div className="flex flex-col justify-start">
          <span className="text-zinc-700 line-clamp-1">Diego Martínez García</span>
          <small className="text-zinc-500 line-clamp-1">diegogama8934@gmail.com</small>
        </div>
      </div>

      <hr />

      {
        dropdownButtons.map(({ name, icon }, index, arr) => (
          <button
            key={index}
            className="text-zinc-700 p-2 text-start hover:bg-zinc-200 transition-all flex items-center gap-3 rounded"
          >
            <span className="material-symbols-rounded !text-zinc-700">{icon}</span>
            {name}
          </button>
        ))
      }

      <hr />

      <button
        className="text-zinc-700 p-2 text-start hover:bg-zinc-200 transition-all flex items-center gap-2 rounded"
        onClick={logout}
      >
        <span className="material-symbols-rounded !text-zinc-700">logout</span>
        Cerrar sesión
      </button>
    </div>
  );
}