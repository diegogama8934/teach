"use client";
import { SubjectTagField } from "@/components";
import type { subjectCard } from "@/utils/Interfaces";

interface Props extends subjectCard {
  onSubjectNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onAddTag: () => void
  onTagRemove: (tagId: string) => void
  onTagUp: (index: number) => void
  onTagDown: (index: number) => void
  onTagChangeName: (newName: string, index: number) => void
  onTagChangeValue: (newValue: string, index: number) => void
}

export function FormCreateSubject({
  name,
  tags,
  onSubjectNameChange,
  onAddTag,
  onTagRemove,
  onTagUp,
  onTagDown,
  onTagChangeName,
  onTagChangeValue
}: Props) {


  return (
    <form className="h-full w-full bg-zinc-50 rounded-3xl p-8" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor=""
          className="text-zinc-600 text-xl">Nombre de la clase</label>
        <input
          type="text"
          className="bg-gray-200 py-3 px-4 rounded-lg focus-visible:outline-none"
          placeholder="Escribe el nombre de la materia"
          value={name}
          onChange={onSubjectNameChange}
          onKeyDown={(e) => { if (e.key == "Enter" && tags.length == 0) onAddTag() }} />
      </div>
      {
        tags.length != 0 ? (
          tags.map((tag, index) => (
            <SubjectTagField
              key={tag.id}
              tag={tag}
              index={index}
              onAddTag={onAddTag}
              onTagRemove={onTagRemove}
              onTagUp={onTagUp}
              onTagDown={onTagDown}
              onTagChangeName={onTagChangeName}
              onTagChangeValue={onTagChangeValue}
            />
          ))
        ) : (
          <p className="my-4 text-zinc-400">Puedes agregar hasta 5 campos para que tus estudiantes puedan identificar tu clase</p>
        )
      }
      <button
        className="bg-primaryColor text-white py-2 px-4 rounded-md"
        onClick={onAddTag}
      >
        Agregar campo
      </button>
    </form >
  );
}