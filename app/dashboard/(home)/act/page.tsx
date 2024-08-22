"use client"
import { Header } from "@/components"
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Actividades y tareas",
//   description: "Panel de clases de usuario"
// }

async function getEvidences() {


  return ([]);
}

//TODO make this async
export default function Page() {

  // const evidences = await getEvidences();

  return (
    <>
      <Header title="Actividades y tareas" secondaryAction={SecondaryAction()} primaryAction={PrimaryAction()} />

      <main className="flex flex-1 w-full bg-white rounded-3xl p-8">
        {
          [].length ?
            (
              <div>

              </div>
            )
            :
            (
              <div className="flex justify-center items-center flex-col h-full w-full">
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


function PrimaryAction() {
  return (
    <button
      className="bg-primaryColor border-primaryColor px-4 py-2 border-[1px] text-white rounded-md flex items-center gap-2">
      <span className="inline-block text-sm">Agregar evidencia</span>
      <span className="material-symbols-rounded !text-white inline-block !text-[18px]">add_circle</span>
    </button>
  );
}

function SecondaryAction() {
  return (
    <button className="bg-transparent border-primaryColor px-4 py-2 border-[1px] text-primaryColor rounded-md flex items-center gap-2">
      <span className="inline-block text-sm">Mi trabajo</span>
      <span className="material-symbols-rounded !text-primaryColor inline-block !text-[18px]">description</span>
    </button>
  );
}