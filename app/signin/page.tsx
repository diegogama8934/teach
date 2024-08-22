"use client"
import Image from "next/image";
import Link from "next/link";
import { FormRegisterAccount } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "Crear cuenta en TEACH. Plataforma para clases virtuales"
}

export default function SignInPage() {


  return (
    <div className="flex flex-col gap-24 items-center py-24 bg-white min-h-screen">

      <div className="flex flex-col items-center gap-12">
        <Link href="/" className="flex items-center gap-8">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="Logo"
          />
          <span className="text-4xl text-zinc-700 font-bold tracking-wide">TEACH</span>
        </Link>
        <h1 className="text-3xl font-medium">Registrando tu cuenta</h1>
      </div>

      <button>Regístrate con google</button>

      <FormRegisterAccount />

    </div>
  );
}