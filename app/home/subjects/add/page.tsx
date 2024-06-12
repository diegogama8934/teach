"use client"

import { use, useState } from "react";

interface extraInput {
  id: string
  dataName: string
  dataValue: string
}

export default function Page() {

  const [subjectName, setSubjectName] = useState("");
  const [extraInputs, setExtraInputs] = useState<extraInput[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleAddInput = () => {
    if (extraInputs.length >= 5) return;
    setExtraInputs([
      ...extraInputs,
      {
        id: idCounter.toString(),
        dataName: "",
        dataValue: ""
      }
    ]);
    setIdCounter(idCounter + 1);
  };

  const handleDeleteInput = (inputId: string) => {
    setExtraInputs(extraInputs.filter(extraInput => extraInput.id != inputId));
  }

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-extralight text-zinc-500">Mis clases - Creando una clase</h1>
        <div className="flex gap-2">
          <button className="bg-transparent border-primaryColor px-4 py-2 border-[1px] text-primaryColor rounded-md flex items-center gap-2">
            <span className="inline-block text-sm">Ingresa a una clase</span>
            <span className="material-symbols-rounded !text-primaryColor inline-block !text-[18px]">arrow_circle_up</span>
          </button>
          <button className="bg-primaryColor border-primaryColor px-4 py-2 border-[1px] text-white rounded-md flex items-center gap-2">
            <span className="inline-block text-sm">Crear una clase</span>
            <span className="material-symbols-rounded !text-white inline-block !text-[18px]">add_circle</span>
          </button>
          <button className="px-4 py-2 rounded-md hover:bg-white hover:cursor-pointer transition-colors">
            Diego Martínez García
          </button>
        </div>
      </header>
      <main className="h-full w-full bg-zinc-50 rounded-3xl p-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="text-zinc-600">Nombre de la clase</label>
          <input
            type="text"
            className="bg-gray-200 py-2 px-4 rounded-lg focus-visible:outline-none"
            placeholder="Escribe el nombre de la materia"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)} />
        </div>

        {
          extraInputs.length != 0 ? (
            extraInputs.map((extraInput, index) => (
              <div key={extraInput.id} className="my-4 flex gap-4 items-center w-full">
                <div className="flex gap-2">
                  <button className="rounded-lg bg-gray-200 pt-2"><span className="material-symbols-rounded">keyboard_arrow_down</span></button>
                  <button className="rounded-lg bg-gray-200 pt-2"><span className="material-symbols-rounded">keyboard_arrow_up</span></button>
                </div>
                <input
                  type="text"
                  value={extraInput.dataName}
                  className="bg-gray-200 py-2 px-4 rounded-lg focus-visible:outline-none w-full"
                  placeholder="Grupo, semestre, horario..."
                  onChange={(e) => {
                    let newExtraInputs = [...extraInputs];
                    newExtraInputs[index].dataName = e.target.value;
                    setExtraInputs(newExtraInputs);
                  }} />
                <input
                  type="text"
                  value={extraInput.dataValue}
                  className="bg-gray-200 py-2 px-4 rounded-lg focus-visible:outline-none w-full"
                  placeholder="Valor del dato"
                  onChange={(e) => {
                    let newExtraInputs = [...extraInputs];
                    newExtraInputs[index].dataValue = e.target.value;
                    setExtraInputs(newExtraInputs);
                  }} />
                <button
                  className="flex justify-center items-center bg-red-600 rounded-md p-2"
                  onClick={() => handleDeleteInput(extraInput.id)}>
                  <span className="material-symbols-rounded block !text-white">delete</span>
                </button>
              </div>
            ))
          ) : (
            <p>Puedes agregar hasta 5 campos para que tus estudiantes puedan identificar tu clase</p>
          )
        }

        <button
          className="bg-primaryColor text-white py-2 px-4 rounded-md"
          onClick={handleAddInput}>Agregar campo</button>
        <div>
          <p>{subjectName}</p>
        </div>
      </main>
    </>
  );
}