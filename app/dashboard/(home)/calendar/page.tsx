import { Header } from "@/components"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendario",
  description: "Calendario del usuario"
}

export default function CalendarPage() {


  return (
    <>
      <Header title="Calendario" primaryAction={PrimaryAction()} />

      <main className="flex flex-1 w-full bg-white rounded-3xl p-8">

        <div className="flex justify-center items-center flex-col h-full w-full">
          <span className="material-symbols-rounded !text-[#C0C0C0] inline-block !text-[140px]">event</span>
          <p className="text-[#C0C0C0] text-xl leading-10 max-w-[700px] text-center">
            Este calendario está hecho para apoyarte en tu día a día, por ello puedes incluir actividades que incluso
            realices los fines de semana o que no tengan que ver con las clases.
          </p>
        </div>

      </main>
    </>
  );
}


function PrimaryAction() {
  return (
    <button
      className="bg-primaryColor border-primaryColor px-4 py-2 border-[1px] text-white rounded-md flex items-center gap-2">
      <span className="inline-block text-sm">Editar</span>
      <span className="material-symbols-rounded !text-white inline-block !text-[18px]">edit</span>
    </button>
  );
}