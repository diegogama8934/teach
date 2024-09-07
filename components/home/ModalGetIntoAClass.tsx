"use client";
import { FormEvent, useState } from "react";
import { Modal } from "@/components";

export function ModalGetIntoAClass() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [classCode, setClassCode] = useState("");

  function openModal(){
    setIsModalOpen(true);
  }
  
  function closeModal(){
    setIsModalOpen(false);
  }

  function updateClassCode(newValue: string) {
    setClassCode(newValue);
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
        onClick={openModal}>
        <span className="inline-block text-sm">Ingresa a una clase</span>
        <span className="material-symbols-rounded !text-primaryColor inline-block !text-[18px]">arrow_circle_up</span>
      </button>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onModalClose={() => setClassCode("")}
        title="Ingresando a un curso"
        content={
          <ModalContent
            handleFormSubmit={handleFormSubmit}
            classCode={classCode}
            error={error}
            updateClassCode={updateClassCode}
          />
        }
        footer={
          <ModalFooter 
            closeModal={closeModal}
          />
        }
      />
    </>
  );
}

function ModalContent({
  updateClassCode, handleFormSubmit, classCode, error
}: {
  updateClassCode: (newValue: string) => void, handleFormSubmit: (e: FormEvent) => Promise<void>, classCode: string, error: boolean
}) {

  return (
    <form
      className="flex flex-col gap-16 opacity-100 w-[420px]"
      onSubmit={handleFormSubmit}>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="code"
          className="text-zinc-500">Ingresa el código de la materia</label>
        <input
          id="code"
          name="code"
          type="text"
          onChange={(e) => updateClassCode(e.target.value)}
          value={classCode}
          className="p-2 bg-zinc-50 focus-visible:outline-none" />
        <small className="text-zinc-500">* El docente de la materia debe hacerte llegar el código de la clase por algún medio externo a la plataforma.</small>
        {error && <small className="text-red-500 font-bold">El código que ingresaste no coincide con ninguna clase</small>}
      </div>
    </form>
  );
}

function ModalFooter({closeModal}: {closeModal: () => void}) {
  return (
    <div className="flex gap-4">
      <button
        className="bg-red-500 text-white p-2 rounded-lg transition-all flex-1 hover:cursor-pointer hover:scale-105"
        onClick={closeModal}
      >Cancelar</button>
      <button
        className="bg-primaryColor text-white p-2 rounded-lg transition-all flex-1 hover:cursor-pointer hover:scale-105"
        type="submit"
      >Confirmar</button>
    </div>
  );
}