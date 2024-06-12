"use client"

import { ReactNode } from "react";


export default function Header({
  title, primaryAction, secondaryAction
}: {
  title: string, primaryAction: ReactNode, secondaryAction: ReactNode
}) {


  return (
    <header className="flex justify-between items-center">

      <h1 className="text-4xl font-extralight text-[#888888]">{title}</h1>

      <div className="flex gap-2">

        {secondaryAction}

        {primaryAction}

        <button className="px-4 py-2 rounded-md hover:bg-white hover:cursor-pointer transition-colors">
          Diego Martínez García
        </button>
      </div>
    </header>
  );
}