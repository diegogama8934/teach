import { Header } from "@/components";
import { Metadata } from "next";
import { StudentInClass } from "@/components";

interface Props {
  params: { subjectId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  //TODO: getSubjectNameById using params.id and set it like:

  return {
    title: `${"Subject"} - Asistencia`,
    description: `Panel de anuncios de clase de la materia ${"Subject"}`
  }
}

async function getSubjectNameById(subjectId: string): Promise<string> {


  return "Nombre de la materia";
}

export default async function TeacherStudentsPage({ params }: Props) {

  const subjectName = await getSubjectNameById(params.subjectId);

  return (
    <>

      <Header title={`${subjectName} - Asistencias`} primaryAction={<></>} />

      <main className="flex flex-col flex-1 gap-4 w-full bg-white rounded-3xl p-8">
        Aquí van las asistencias de todos los alumnos
      </main>
    </>
  );
}