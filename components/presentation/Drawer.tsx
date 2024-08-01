"use client";
import Link from "next/link";

interface Props {
  isOpen: boolean
  toggle: () => void
}

export function Drawer({ isOpen, toggle }: Props) {


  return (
    <>
      <div
        className={`fixed ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 transition-all top-0 left-0 w-screen h-screen bg-black/60`}
        onClick={toggle}
      >
      </div>
      <aside className={`flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"} p-2 gap-2 duration-500 fixed top-0 right-0 w-64 h-screen bg-zinc-50`}>
        <Link href={""} className="lg:hidden rounded bg-primaryColor/15 block w-full p-2 text-primaryColor">Inicio</Link>
        <Link href={""} className="lg:hidden rounded block w-full p-2 text-zinc-700">Preguntas frecuentes</Link>
        <Link href={""} className="lg:hidden rounded block w-full p-2 text-zinc-700">¿Por qué TEACH?</Link>
        <Link href={""} className="lg:hidden rounded block w-full p-2 text-zinc-700">Guía de usuario</Link>
      </aside>
    </>
  );
}