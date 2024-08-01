"use client"
import { FormEvent, useState, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export function FormLogin() {

  const router = useRouter();
  const [form, setForm] = useState();

  const { login } = useContext(UserContext);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Handle submit")
    login("TokenDeTeachJAJAJA");
  }

  return (
    <form action="" onSubmit={handleSubmit} className="min-w-[600px] flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="">¿Cuál es tu nombre?</label>
        <input type="text" className="bg-gray-100 py-3 px-4 rounded-lg focus-visible:outline-none" placeholder="Escribe tu nombre" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="">¿Cuáles son tus apellidos?</label>
        <input type="text" className="bg-gray-100 py-3 px-4 rounded-lg focus-visible:outline-none" placeholder="Escribe tus apellidos" />
      </div>

      <button type="submit" className="p-2 bg-primaryColor text-white w-48 rounded mt-4">Iniciar sesión</button>
    </form>
  );
}