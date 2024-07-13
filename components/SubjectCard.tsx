"use client";
import { subjectCard } from "@/utils/Interfaces"
import { useRouter } from "next/navigation";

export default function SubjectCard(props: subjectCard) {
  if (props.tags?.length > 0) return <CardWithTags {...props} />;
  return <Card {...props} />;
}

function Card({ name, teacher, onTimeActs, lessTimeActs, lowTimeActs, isCreating, subjectId }: subjectCard) {
  const router = useRouter();
  return (
    <div
      className={`h-80 w-[400px] bg-white rounded-xl flex flex-col justify-center items-center gap-2 shadow-lg ${!isCreating && "hover:cursor-pointer"}`}
      onClick={() => {
        if (!isCreating) router.push(`/home/subjects/${subjectId!}`);
      }}
    >
      <h3 className={"text-2xl fontbold text-primaryColor"}>{name.length != 0 ? name : "Nombre de la materia"}</h3>
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

function CardWithTags({ name, teacher, tags, onTimeActs, lessTimeActs, lowTimeActs, isCreating, subjectId }: subjectCard) {
  const router = useRouter();
  return (
    <div
      className={`h-80 w-[400px] bg-white rounded-xl flex flex-col justify-start items-center gap-4 p-6 shadow transition-all ${!isCreating && "hover:cursor-pointer hover:bg-zinc-50 hover:scale-105"}`}
      onClick={() => {
        if (!isCreating) router.push(`/home/subjects/${subjectId!}`);
      }}
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
}

