"use client"
import Image from "next/image";
import { Header } from "@/components";
import { Metadata } from "next";
import { StudentInClass } from "@/components";

interface Props {
  params: { subjectId: string }
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   //TODO: getSubjectNameById using params.id and set it like:

//   return {
//     title: `${"Subject"} - Estudiantes`,
//     description: `Panel de anuncios de clase de la materia ${"Subject"}`
//   }
// }

async function getSubjectNameById(subjectId: string): Promise<string> {


  return "Nombre de la materia";
}

// TODO make this async
export default function TeacherStudentsPage({ params }: Props) {

  // const subjectName = await getSubjectNameById(params.subjectId);

  return (
    <>

      <Header title={`${"subjectName"} - Estudiantes`} primaryAction={<></>} />

      <main className="flex flex-col flex-1 gap-4 w-full bg-white rounded-3xl p-8">
        <StudentInClass />
      </main>
    </>
  );
}