"use client"
import { subjectCard } from "@/utils/Interfaces";
import Link from "next/link";

export function Card({ name, teacher, onTimeActs, lessTimeActs, lowTimeActs, accentColor, isCreating, userId }: subjectCard) {

  if (isCreating) return (
    <div className={`h-80 w-[400px] bg-white rounded-xl flex flex-col justify-center items-center gap-2 shadow-lg`}>
      <h3 className={`text-2xl fontbold ${accentColor}`}>{name.length != 0 ? name : "Nombre de la materia"}</h3>
      <p className={"bg-primaryColor w-full text-center text-white py-2"}>{teacher}</p>
      {
        (onTimeActs || lessTimeActs || lowTimeActs) ?
          (<div className="flex gap-2">
            <div className="w-12 h-12 bg-red-500 text-white">{lowTimeActs}</div>
            <div className="w-12 h-12 bg-amber-500 text-white">{lessTimeActs}</div>
            <div className="w-12 h-12 bg-green-500 text-white">{onTimeActs}</div>
          </div>) :
          (
            <></>
          )
      }
    </div>
  );

  return (
    <Link className={`
      h-80 w-[400px] bg-white rounded-xl flex flex-col justify-center items-center gap-2 shadow-lg
      ${!isCreating && "hover:scale-105 hover:bg-zinc-50 cursor-pointer"}
    `}
      href={`/dashboard/subject/${name}`}
    >
      <h3 className={`text-2xl fontbold ${accentColor}`}>{name.length != 0 ? name : "Nombre de la materia"}</h3>
      <p className={"bg-primaryColor w-full text-center text-white py-2"}>{teacher}</p>
      {
        (onTimeActs || lessTimeActs || lowTimeActs) ?
          (<div className="flex gap-2">
            <div className="w-12 h-12 bg-red-500 text-white">{lowTimeActs}</div>
            <div className="w-12 h-12 bg-amber-500 text-white">{lessTimeActs}</div>
            <div className="w-12 h-12 bg-green-500 text-white">{onTimeActs}</div>
          </div>) :
          (
            <></>
          )
      }
    </Link>
  );
}