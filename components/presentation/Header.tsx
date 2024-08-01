"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "./Drawer";

export function Header() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function toggleDrawer() {
    setIsDrawerOpen(prevState => !prevState);
  }

  return (
    <header className="lg:mt-8 p-4 lg:px-32 flex items-center justify-between lg:shadow-none shadow sticky top-0 z-10 bg-white/40 backdrop-blur-md">
      <div className="flex gap-8 items-center">
        <Link href="" className="flex gap-2 items-center mr-12">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Logo"
            className="lg:w-10 w-8 aspect-square"
          />
          <span className="lg:text-xl text-md tracking-wide text-zinc-800">TEACH</span>
        </Link>

        <Link href={""} className="lg:block hidden text-primaryColor font-black">Inicio</Link>
        <Link href={""} className="lg:block hidden text-zinc-700">Preguntas frecuentes</Link>
        <Link href={""} className="lg:block hidden text-zinc-700">¿Por qué TEACH?</Link>
        <Link href={""} className="lg:block hidden text-zinc-700">Guía de usuario</Link>
      </div>

      <button
        className="lg:hidden p-2 flex justify-center items-center"
        onClick={toggleDrawer}
      >
        <span className="material-symbols-rounded">menu</span>
      </button>

      <div className="lg:flex hidden gap-8">
        <Link href={"/login"} className="">Inicia sesión</Link>
        <Link href={"/signin"} className="">Regístrate</Link>
      </div>

      <Drawer isOpen={isDrawerOpen} toggle={toggleDrawer} />

    </header>
  );
}