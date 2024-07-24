import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col gap-4 bg-white min-h-screen">
      <header className="mt-8 px-48 flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <Link href="" className="flex gap-2 items-center">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="Logo"
            />
            <span className="text-xl font-bold tracking-wide text-zinc-800">TEACH</span>
          </Link>

          <Link href={""} className="text-primaryColor font-black">Inicio</Link>
          <Link href={""} className="text-zinc-700">Preguntas frecuentes</Link>
          <Link href={""} className="text-zinc-700">¿Por qué TEACH?</Link>
          <Link href={""} className="text-zinc-700">Guía de usuario</Link>
        </div>
        <div className="flex gap-8">
          <Link href={""} className="">Inicia sesión</Link>
          <Link href={""} className="">Regístrate</Link>
        </div>
      </header>

      <div className="relative">
        <div className="flex flex-col gap-12 absolute top-24 left-48 w-[500px]">
          <h2 className="text-3xl font-medium leading-relaxed">Una manera sencilla de administrar clases virtuales</h2>
          <Link href="" className="bg-primaryColor text-white rounded p-4 w-48 text-center">Regístrate</Link>
        </div>
      </div>
    </div>
  );
}
