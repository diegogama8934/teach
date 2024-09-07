"use client";
import { useState } from "react";



export function TeacherData() {
  const [isEditing, setIsEditing] = useState(false);


  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-2xl text-zinc-400">Datos del docente</h2>
        <button className="bg-primaryColor flex items-center justify-center p-2 rounded-full hover:scale-105 transition-all w-10 h-10">
          <span className="material-symbols-rounded !text-white !text-lg">edit</span>
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        <li className="text-zinc-600"><span className="font-bold">Nombre:</span> Marta Palazon</li>
        <li className="text-zinc-600"><span className="font-bold">Correo:</span> martapalazon@gmail.com</li>
        <li className="text-zinc-600"><span className="font-bold">Teléfono:</span> 000 000 0000</li>
        <li className="text-zinc-600"><span className="font-bold">Consideraciones:</span> Solo atenderé mensajes en el número telefónico antes de las 8 de la noche, el correo lo checo todos los días y ahí pueden mandar cualquier duda o situación a cualquier hora. :)</li>
      </ul>
    </section>
  );
}