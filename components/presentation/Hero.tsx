"use client"
import Image from "next/image";
import Link from "next/link";

export function Hero() {


  return (
    <section className="flex lg:flex-row flex-col lg:gap-0 gap-12 items-center px-12 lg:py-24 lg:px-48 justify-between mt-12">
      <div className="flex flex-col lg:w-[600px] lg:px-0">
        <h1 className="text-2xl lg:text-4xl font-semibold leading-snug text-zinc-700">Todo lo que necesitas para clases virtuales en una sola plataforma</h1>
        <p className="mt-4 text-zinc-500 lg:text-base text-sm">
          Nuestra plataforma te permite administrar y llevar a cabo tus clases virtuales de manera eficiente y sin complicaciones.
          Con herramientas integradas para videoconferencias, gestión de estudiantes y recursos educativos, tendrás todo lo que necesitas
          para ofrecer una experiencia educativa excepcional desde cualquier lugar.
        </p>
        <Link href="" className="bg-primaryColor text-white rounded p-4 w-32 lg:w-48 text-center mt-16">Regístrate</Link>
      </div>
      <div className="relative h-72 w-full lg:w-[400px] lg:h-[400px]">
        <Image
          src="/hero-image.png"
          width={200}
          height={200}
          alt="someone studying in laptop"
          className="absolute rounded-full w-40 lg:w-[200px] aspect-square object-cover shadow-2xl"
          priority
        />
        <Image
          src="/hero-image-2.jpeg"
          width={300}
          height={300}
          alt="someone studying in laptop"
          className="rounded-full w-52 lg:w-[300px] aspect-square object-cover shadow-2xl absolute right-0 bottom-0"
          priority
        />
      </div>
    </section>
  );
}