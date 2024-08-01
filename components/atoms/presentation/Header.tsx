import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="lg:mt-8 p-4 lg:px-32 flex items-center justify-between lg:shadow-none shadow">
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
      <button></button>
      <div className="lg:flex hidden gap-8">
        <Link href={"/login"} className="">Inicia sesión</Link>
        <Link href={"/signin"} className="">Regístrate</Link>
      </div>
    </header>
  );
}