import { fakeSubjectsAsStudent, fakeSubjectsAsTeacher } from "@/utils/FakeData";
import SubjectCard from "@/components/SubjectCard";
import Header from "@/components/Header";
import { ModalGetIntoAClass } from "@/components/ModalGetIntoAClass";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis clases",
  description: "Panel de clases de usuario"
}

async function getSubjectsByUserId() {
  // TODO: In the future this need to receive the user ID

  // when db exists, query the db to get user subjects by ID

  return ({ fakeSubjectsAsStudent, fakeSubjectsAsTeacher });
}

export default async function Page() {

  const {
    fakeSubjectsAsStudent: subjectsAsStudent,
    fakeSubjectsAsTeacher: subjectsAsTeacher
  } = await getSubjectsByUserId();

  return (
    <>

      <Header title="Mis clases" secondaryAction={<ModalGetIntoAClass />} primaryAction={<PrimaryAction />} />

      <main className="flex-1 w-full bg-white rounded-3xl p-8">
        {
          subjectsAsStudent &&
          (
            <div className="w-full flex flex-wrap gap-4 mb-16">
              <h2 className="w-full text-3xl text-zinc-400 font-light">Cursos que tomas</h2>
              {
                subjectsAsStudent.map((subject, index) => (
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
          subjectsAsTeacher &&
          (

            <div className="w-full flex flex-wrap gap-4">
              <h2 className="w-full text-3xl text-zinc-400 font-light">Cursos que impartes</h2>
              {
                subjectsAsTeacher.map((subject, index) => (
                  <SubjectCard key={index} name={subject.name} teacher="Diego Martínez García" tags={subject.tags} />
                ))
              }
            </div>

          )
        }
        {
          (!subjectsAsStudent && !subjectsAsTeacher) && (
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
  return (
    <Link
      href="/home/subjects/add"
      className="bg-primaryColor border-primaryColor px-4 py-2 border-[1px] text-white rounded-md flex items-center gap-2">
      <span className="inline-block text-sm">Crear una clase</span>
      <span className="material-symbols-rounded !text-white inline-block !text-[18px]">add_circle</span>
    </Link>
  );
}