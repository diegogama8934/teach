"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [subjects, setSubjects] = useState<String[]>();
  const router = useRouter();

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-extralight text-[#888888]">Mis clases</h1>
        <div className="flex gap-2">
          <button className="bg-transparent border-primaryColor px-4 py-2 border-[1px] text-primaryColor rounded-md flex items-center gap-2">
            <span className="inline-block text-sm">Ingresa a una clase</span>
            <span className="material-symbols-rounded !text-primaryColor inline-block !text-[18px]">arrow_circle_up</span>
          </button>
          <button
            onClick={() => router.push("/home/subjects/add")}
            className="bg-primaryColor border-primaryColor px-4 py-2 border-[1px] text-white rounded-md flex items-center gap-2">
            <span className="inline-block text-sm">Crear una clase</span>
            <span className="material-symbols-rounded !text-white inline-block !text-[18px]">add_circle</span>
          </button>
          <button className="px-4 py-2 rounded-md hover:bg-white hover:cursor-pointer transition-colors">
            Diego Martínez García
          </button>
        </div>
      </header>
      <main className="h-full w-full bg-white rounded-3xl">
        {
          subjects?.length ?
            (
              <div>

              </div>
            )
            :
            (
              <div className="flex justify-center items-center flex-col h-full">
                <span className="material-symbols-rounded !text-[#C0C0C0] inline-block !text-[140px]">tv_off</span>
                <p className="text-[#C0C0C0] text-3xl max-w-96 text-center">
                  Aún no estás inscrito o impartes alguna materia
                </p>
              </div>
            )
        }
      </main>
    </>
  );
}