"use client"

import { tag } from "@/utils/Interfaces"

interface Props {
  tag: tag
  index: number
  onAddTag: () => void
  onTagRemove: (tagId: string) => void
  onTagUp: (index: number) => void
  onTagDown: (index: number) => void
  onTagChangeName: (newName: string, index: number) => void
  onTagChangeValue: (newValue: string, index: number) => void
}

export default function FieldSubjectInput({
  index,
  onAddTag,
  onTagChangeName,
  onTagChangeValue,
  onTagDown,
  onTagRemove,
  onTagUp,
  tag,
}: Props) {

  return (
    <div className="my-4 flex gap-4 items-end w-full">
      <div className="flex gap-2">
        <button
          className="rounded-lg bg-gray-200 pt-[6px] h-8 w-8"
          onClick={() => onTagUp(index)}>
          <span className="material-symbols-rounded">keyboard_arrow_up</span>
        </button>
        <button
          className="rounded-lg bg-gray-200 pt-[6px] h-8 w-8"
          onClick={() => onTagDown(index)}>
          <span className="material-symbols-rounded">keyboard_arrow_down</span>
        </button>
      </div>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor=""
          className="text-zinc-400">Nombre del campo</label>
        <input
          id={`${tag.id}-1`}
          type="text"
          value={tag.name}
          autoFocus
          className="bg-gray-200 py-3 px-4 rounded-lg focus-visible:outline-none w-full"
          placeholder="Horario"
          onChange={(e) => onTagChangeName(e.target.value, index)}
          onKeyDown={(e) => {
            if (e.key == "Enter") onAddTag();
            if (e.ctrlKey && e.key == "ArrowUp") onTagUp(index);
            if (e.ctrlKey && e.key == "ArrowDown") onTagDown(index);
            if (e.ctrlKey && e.key == "D") onTagRemove(tag.id!)
          }} />
      </div>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor=""
          className="text-zinc-400">Valor del campo</label>
        <input
          id={`${tag.id}-2`}
          type="text"
          value={tag.value}
          className="bg-gray-200 py-3 px-4 rounded-lg focus-visible:outline-none w-full"
          placeholder="10:00 - 14:00 hrs"
          onChange={(e) => onTagChangeValue(e.target.value, index)}
          onKeyDown={(e) => {
            if (e.key == "Enter") onAddTag();
            if (e.ctrlKey && e.key == "ArrowUp") onTagUp(index);
            if (e.ctrlKey && e.key == "ArrowDown") onTagDown(index);
            if (e.ctrlKey && e.key == "D") onTagRemove(tag.id!)
          }} />
      </div>
      <button
        className="flex justify-center items-center bg-red-600 rounded-md p-2 hover:scale-110 transition-all"
        onClick={() => onTagRemove(tag.id!)}>
        <span className="material-symbols-rounded block !text-white">delete</span>
      </button>
    </div>
  );
}