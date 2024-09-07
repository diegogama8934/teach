import { Header, SubjectTopic, TeacherData } from "@/components";
import { Metadata } from "next";
import { FakeSubjectsTopics } from "@/constants";
import Link from "next/link";

interface Props {
  params: { subjectId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  //TODO: getSubjectNameById using params.id and set it like:

  return {
    title: `${"Subject"} - Contenido`,
    description: `Panel de anuncios de clase de la materia ${"Subject"}`
  }
}

async function getSubjectNameById(subjectId: string): Promise<string> {


  return "Nombre de la materia";
}

async function getSubjectContentById(subjectId: string) {
  // TODO: this need to return all the information that this page will need

  // Content need to have:
  //    - Teacher data
  //    - Weightings
  //    - Material (files like pdfs to use in subject)
  //    - List of topics of the subject
}

export default async function StudentContentPage({ params }: Props) {

  const subjectName = await getSubjectNameById(params.subjectId);
  // Considering deleting const subject name because subjectContent can return the subject name
  const subjectContent = await getSubjectContentById(params.subjectId);

  return (
    <>

      <Header title={`${subjectName} - Contenido`} primaryAction={<></>} />

      <main className="flex flex-col flex-1 w-full bg-white rounded-3xl p-8 gap-12">

        <TeacherData />

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-zinc-400">Ponderaciones</h2>

          <table className="border-collapse border">
            <thead className="">
              <tr>
                <th className="bg-zinc-100 p-2">Primer periodo</th>
                <th className="bg-zinc-100 p-2">Segundo periodo</th>
                <th className="bg-zinc-100 p-2">Tercer periodo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-center border-b">50% evaluación</td>
                <td className="p-2 text-center border-b">50% evaluación</td>
                <td className="p-2 text-center border-b">50% evaluación</td>
              </tr>
              <tr>
                <td className="p-2 text-center border-b">25% tareas</td>
                <td className="p-2 text-center border-b">25% tareas</td>
                <td className="p-2 text-center border-b">50% proyecto</td>
              </tr>
              <tr>
                <td className="p-2 text-center border-b">25% actividades</td>
                <td className="p-2 text-center border-b">25% actividades</td>
                <td className="p-2 text-center border-b">-</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-zinc-400">Material</h2>

          <div className="h-80 bg-primaryColor flex justify-center items-center rounded-lg hover:bg-primaryColor/95 transition-all">
            <span className="text-white">Aquí irán archivos PDF que se ocuparán en el curso...</span>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-zinc-400">Temario</h2>

          {
            FakeSubjectsTopics.map((subjectTopic, index) => <SubjectTopic key={index} {...subjectTopic} />)
          }
        </section>
      </main>
    </>
  );
}