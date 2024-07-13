import Header from "@/components/Header";

export default function EvaluationsPage() {


  return (
    <>
      <Header title="Evaluaciones" primaryAction={PrimaryAction()} />

      <main className="flex flex-1 w-full bg-white rounded-3xl p-8">

        <div className="flex justify-center items-center flex-col h-full w-full">
          <span className="material-symbols-rounded !text-[#C0C0C0] inline-block !text-[140px]">tv_off</span>
          <p className="text-[#C0C0C0] text-3xl max-w-96 text-center">
            Aún no estás inscrito o impartes alguna materia
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
      <span className="inline-block text-sm">Agregar evaluación</span>
      <span className="material-symbols-rounded !text-white inline-block !text-[18px]">add</span>
    </button>
  );
}