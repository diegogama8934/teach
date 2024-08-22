"use client"
import Image from "next/image";

export default function NotFoundPage() {


  return (
    <div className="flex flex-col w-full h-full items-center relative bg-white pt-20">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-7xl font-bold tracking-widest">404</h1>
        <h2 className="text-xl">Ooops! We don´t know this page</h2>
      </div>

      <Image
        src="/not-found-image.svg"
        width={450}
        height={300}
        alt="Not found image"
        className="absolute bottom-0"
      />
    </div>
  );
}