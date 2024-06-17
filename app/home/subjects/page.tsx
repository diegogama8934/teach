"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fakeSubjectsAsStudent, fakeSubjectsAsTeacher } from "@/utils/FakeData";
import { subjectData, tag } from "@/utils/Interfaces";
import SubjectCard from "@/components/SubjectCard";
import Header from "@/components/Header";

export default function Page() {
  const [subjects, setSubjects] = useState<{ subjectsAsStudent: subjectData[], subjectsAsTeacher: subjectData[] } | null>(null);

  useEffect(() => {
    // Get subjects from the API
    setSubjects({
      subjectsAsStudent: fakeSubjectsAsStudent,
      subjectsAsTeacher: fakeSubjectsAsTeacher
    });
  }, []);
  return (
    <>

      <Header title="Mis clases" secondaryAction={SecondaryAction()} primaryAction={PrimaryAction()} />

      <main className="flex-1 w-full bg-white rounded-3xl p-8">
        {
          subjects?.subjectsAsStudent &&
          (
            <div className="w-full flex flex-wrap gap-4 mb-16">
              <h2 className="w-full text-3xl text-zinc-400 font-light">Cursos que tomas</h2>
              {
                subjects.subjectsAsStudent.map((subject, index) => (
                  <SubjectCard
                    key={index}
                    name={subject.name}
                    teacher="Diego Martínez García"
                    tags={subject.tags}
                    lessTimeActs={subject.lessTimeActs}
                    lowTimeActs={subject.lowTimeActs}
                    onTimeActs={subject.onTimeActs} />
                ))
              }
            </div>
          )
        }
        {
          subjects?.subjectsAsTeacher &&
          (

            <div className="w-full flex flex-wrap gap-4">
              <h2 className="w-full text-3xl text-zinc-400 font-light">Cursos que impartes</h2>
              {
                subjects.subjectsAsTeacher.map((subject, index) => (
                  <SubjectCard key={index} name={subject.name} teacher="Diego Martínez García" tags={subject.tags} />
                ))
              }
            </div>

          )
        }
        {
          (!subjects) && (
            <div className="flex justify-center items-center flex-col h-full">
              <span className="material-symbols-rounded !text-[#C0C0C0] inline-block !text-[140px]">tv_off</span>
              <p className="text-[#C0C0C0] text-3xl max-w-96 text-center">
                Aún no estás inscrito o impartes alguna materia
              </p>
            </div>
          )
        }
      </main>
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
