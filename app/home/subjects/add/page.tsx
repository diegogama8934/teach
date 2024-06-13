"use client"
import Header from "@/components/Header";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SubjectCard from "@/components/SubjectCard";
import FieldSubjectInput from "@/components/FieldSubjectInput";

interface subjectData {
  name: string
  textColor: string
  backgroundColor: string
  tags: tag[]
}

interface tag {
  id: string
  name: string
  value: string
}

export default function Page() {

  const [subjectData, setSubjectData] = useState<subjectData>({
    name: "",
    textColor: "",
    backgroundColor: "",
    tags: []
  });
  const [idCounter, setIdCounter] = useState(0);
  const handleAddInput = () => {
    if (subjectData.tags.length >= 5) return;
    setSubjectData({
      ...subjectData,
      tags: [
        ...subjectData.tags,
        {
          id: idCounter.toString(),
          name: "",
          value: ""
        }
      ]
    });
    setIdCounter(idCounter + 1);
  };

  const handleColorChange = (backgroundColor: string, textColor: string) => {
    console.log(textColor);
    setSubjectData({ ...subjectData, backgroundColor, textColor });
  }

  return (
    <>
      <Header title="Ingresa a una clase" secondaryAction={SecondaryAction()} primaryAction={PrimaryAction()} />
      <div className="flex gap-4 h-full">
        <main className="h-full w-full bg-zinc-50 rounded-3xl p-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-zinc-600 text-xl">Nombre de la clase</label>
            <input
              type="text"
              className="bg-gray-200 py-3 px-4 rounded-lg focus-visible:outline-none"
              placeholder="Escribe el nombre de la materia"
              value={subjectData.name}
              onChange={(e) => setSubjectData({ ...subjectData, name: e.target.value })}
              onKeyDown={(e) => { if (e.key == "Enter" && subjectData.tags.length == 0) handleAddInput() }} />
          </div>
          {
            subjectData.tags.length != 0 ? (
              subjectData.tags.map((tag, index) => (
                <FieldSubjectInput
                  key={tag.id}
                  tag={tag}
                  subjectData={subjectData}
                  setSubjectData={setSubjectData}
                  index={index}
                  handleAddInput={handleAddInput} />
              ))
            ) : (
              <p className="my-4 text-zinc-400">Puedes agregar hasta 5 campos para que tus estudiantes puedan identificar tu clase</p>
            )
          }
          <button
            className="bg-primaryColor text-white py-2 px-4 rounded-md"
            onClick={handleAddInput}>Agregar campo</button>
        </main>
        <div className="flex flex-col gap-4 max-w-[500px] justify-between">
          <SubjectCard
            name={subjectData.name}
            teacher="Diego Martínez García"
            tags={subjectData.tags}
            onTimeActs={0}
            lessTimeActs={0}
            lowTimeActs={0}
          />
          <button className="w-full bg-primaryColor text-white py-3 rounded-md">Crear clase</button>
        </div>
      </div>
    </>
  );
}

function PrimaryAction(): JSX.Element {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/home/subjects/add")}
      className="bg-primaryColor border-primaryColor px-4 py-2 border-[1px] text-white rounded-md flex items-center gap-2">
      <span className="inline-block text-sm">Crear una clase</span>
      <span className="material-symbols-rounded !text-white inline-block !text-[18px]">add_circle</span>
    </button>
  );
}

function SecondaryAction(): JSX.Element {
  return (
    <button className="bg-transparent border-primaryColor px-4 py-2 border-[1px] text-primaryColor rounded-md flex items-center gap-2">
      <span className="inline-block text-sm">Ingresa a una clase</span>
      <span className="material-symbols-rounded !text-primaryColor inline-block !text-[18px]">arrow_circle_up</span>
    </button>
  );
}