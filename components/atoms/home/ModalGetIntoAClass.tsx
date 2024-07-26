"use client";
import { FormEvent, useEffect, useState } from "react";

export function ModalGetIntoAClass() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(true);
  const [classCode, setClassCode] = useState("");

  function handleModalState() {
    setClassCode("")
    setIsModalOpen(!isModalOpen);
  }

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setIsModalOpen(false);
    // Fetch
  }

  return (
    <>
      <button
        className="bg-transparent border-primaryColor px-4 py-2 border-[1px] text-primaryColor rounded-md flex items-center gap-2"
        onClick={handleModalState}>
        <span className="inline-block text-sm">Ingresa a una clase</span>
        <span className="material-symbols-rounded !text-primaryColor inline-block !text-[18px]">arrow_circle_up</span>
      </button>

      <div
        className={`flex justify-center items-center left-0 top-0 fixed w-screen h-screen ${isModalOpen ? "block" : "hidden"}`}
      >

        <div className="bg-black absolute w-screen h-screen opacity-40 z-[1]"></div>

        <form
          className="flex flex-col gap-16 opacity-100 bg-zinc-100 p-8 rounded-xl shadow-xl z-[2] w-[420px]"
          onSubmit={handleFormSubmit}>

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl">Ingresando a un curso</h3>
            <label
              htmlFor="code"
              className="text-zinc-700">Ingresa el código de la materia</label>
            <input
              id="code"
              name="code"
              type="text"
              onChange={(e) => setClassCode(e.target.value)}
              value={classCode}
              className="p-2 bg-zinc-50 focus-visible:outline-none" />
            <small className="text-zinc-500">* El docente de la materia debe hacerte llegar el código de la clase por algún medio externo a la plataforma.</small>
            {error && <small className="text-red-500 font-bold">El código que ingresaste no coincide con ninguna clase</small>}
          </div>

          <div className="flex gap-4">
            <button
              className="bg-red-500 text-white p-2 rounded-lg transition-all flex-1 hover:cursor-pointer hover:scale-105"
              onClick={handleModalState}
            >Cancelar</button>
            <button
              className="bg-primaryColor text-white p-2 rounded-lg transition-all flex-1 hover:cursor-pointer hover:scale-105"
              type="submit"
            >Confirmar</button>
          </div>
        </form>
      </div>
    </>
  );
}