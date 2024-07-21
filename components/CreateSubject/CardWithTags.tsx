import { subjectCard } from "@/utils/Interfaces";
import Link from "next/link";

export function CardWithTags({ name, teacher, tags, onTimeActs, lessTimeActs, lowTimeActs, accentColor, isCreating }: subjectCard) {

  console.log(isCreating);

  if (isCreating) return (
    <div
      className={`h-80 w-[400px] bg-white rounded-xl flex flex-col justify-start items-center gap-4 p-6 shadow transition-all`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold w-full text-left text-primaryColor">{name.length != 0 ? name : "Nombre de la materia"}</h3>
          <p className="text-light text-zinc-500">{teacher}</p>
        </div>
        {
          (onTimeActs || lessTimeActs || lowTimeActs) ?
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-red-500 text-white flex justify-center items-center hover:scale-110 transition-all rounded-md">
                <span>{lowTimeActs}</span>
              </button>
              <button className="w-8 h-8 bg-amber-500 text-white flex justify-center items-center hover:scale-110 transition-all rounded-md">
                <span>{lessTimeActs}</span>
              </button>
              <button className="w-8 h-8 bg-green-500 text-white flex justify-center items-center hover:scale-110 transition-all rounded-md">
                <span>{onTimeActs}</span>
              </button>
            </div>
            :
            (
              <></>
            )
        }
      </div>
      <ul className="w-full">
        {
          tags.map((tag, index) => (
            <li key={tag.id || index} className="my-2 text-zinc-500">
              <span className="font-bold">{tag.name.length != 0 ? tag.name : "Campo"}</span>: <span>{tag.value.length != 0 ? tag.value : "Valor"}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
  return (
    <Link
      className={`
        h-80 w-[400px] bg-white rounded-xl flex flex-col justify-start items-center gap-4 p-6 shadow transition-all
        ${!isCreating && "hover:scale-105 hover:bg-zinc-50 cursor-pointer"}
      `}
      href={`/home/subjects/${name}`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold w-full text-left text-primaryColor">{name.length != 0 ? name : "Nombre de la materia"}</h3>
          <p className="text-light text-zinc-500">{teacher}</p>
        </div>
        {
          (onTimeActs || lessTimeActs || lowTimeActs) ?
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-red-500 text-white flex justify-center items-center hover:scale-110 transition-all rounded-md">
                <span>{lowTimeActs}</span>
              </button>
              <button className="w-8 h-8 bg-amber-500 text-white flex justify-center items-center hover:scale-110 transition-all rounded-md">
                <span>{lessTimeActs}</span>
              </button>
              <button className="w-8 h-8 bg-green-500 text-white flex justify-center items-center hover:scale-110 transition-all rounded-md">
                <span>{onTimeActs}</span>
              </button>
            </div>
            :
            (
              <></>
            )
        }
      </div>
      <ul className="w-full">
        {
          tags.map((tag, index) => (
            <li key={tag.id || index} className="my-2 text-zinc-500">
              <span className="font-bold">{tag.name.length != 0 ? tag.name : "Campo"}</span>: <span>{tag.value.length != 0 ? tag.value : "Valor"}</span>
            </li>
          ))
        }
      </ul>
    </Link>
  );
}