"use client"
import { useState } from "react";

interface Props {
  isOpen: boolean
  title: string
  content: React.ReactNode
  footer: React.ReactNode
  onModalOpen?: () => void
  onModalClose?:() => void
}

export function Modal({isOpen, title, content, footer, onModalClose, onModalOpen}:Props){

  return(
    <div className={`flex z-20 justify-center items-center left-0 top-0 fixed w-screen h-screen ${isOpen ? "block" : "hidden"}`}>
      <div className="bg-black absolute w-screen h-screen opacity-40" onClick={() => {}}></div>
      <div className="flex flex-col gap-8 z-30 bg-zinc-100 p-8 rounded-xl shadow-xl">
        <span className="text-2xl text-zinc-500">{title}</span>
        <div>{content}</div>
        <div>{footer}</div>
      </div>
    </div>
  );
}