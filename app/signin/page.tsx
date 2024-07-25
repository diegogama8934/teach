import Image from "next/image";

export default function SignInPage() {


  return (
    <div className="flex flex-col gap-24 items-center py-24 bg-white min-h-screen">

      <div className="flex flex-col items-center gap-12">
        <div className="flex items-center gap-8">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="Logo"
          />
          <h2 className="text-4xl text-zinc-700 font-bold tracking-wide">TEACH</h2>
        </div>
        <h1 className="text-3xl font-medium">Registrando tu cuenta</h1>
      </div>

      <button>Regístrate con google</button>

      <form action="" className="min-w-[600px] flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="">¿Cuál es tu nombre?</label>
          <input type="text" className="bg-gray-100 py-3 px-4 rounded-lg focus-visible:outline-none" placeholder="Escribe tu nombre" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">¿Cuáles son tus apellidos?</label>
          <input type="text" className="bg-gray-100 py-3 px-4 rounded-lg focus-visible:outline-none" placeholder="Escribe tus apellidos" />
        </div>
      </form>
    </div>
  );
}