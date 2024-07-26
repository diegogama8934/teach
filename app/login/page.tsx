import Image from "next/image";
import Link from "next/link";
import { FormLogin } from "@/components";

export default function LoginPage() {

  console.log("XD")

  return (
    <div className="min-h-screen bg-white py-24 flex flex-col gap-24 items-center">
      <div className="flex flex-col items-center gap-12">
        <Link href="/" className="flex items-center gap-8">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="Logo"
          />
          <h2 className="text-4xl text-zinc-700 font-bold tracking-wide">TEACH</h2>
        </Link>
        <h1 className="text-3xl font-medium">Iniciar sesión</h1>
      </div>

      <FormLogin />

    </div>
  );
}