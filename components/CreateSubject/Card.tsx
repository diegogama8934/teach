import { subjectCard } from "@/utils/Interfaces";

export function Card({ name, teacher, onTimeActs, lessTimeActs, lowTimeActs, accentColor }: subjectCard) {


  return (
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
}