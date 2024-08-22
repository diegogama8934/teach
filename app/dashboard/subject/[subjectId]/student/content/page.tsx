"use client"
import { Header, SubjectTopic } from "@/components";
import { Metadata } from "next";
import { FakeSubjectsTopics } from "@/constants";

interface Props {
  params: { subjectId: string }
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   //TODO: getSubjectNameById using params.id and set it like:

//   return {
//     title: `${"Subject"} - Contenido`,
//     description: `Panel de anuncios de clase de la materia ${"Subject"}`
//   }
// }

async function getSubjectNameById(subjectId: string): Promise<string> {


  return "Nombre de la materia";
}

async function getSubjectContentById(subjectId: string) {
  // TODO: this need to return all the information that this page will need
}

//TODO make this async
export default function StudentContentPage({ params }: Props) {

  // const subjectName = await getSubjectNameById(params.subjectId);
  // Considering deleting const subject name because subjectContent can return the subject name
  // const subjectContent = await getSubjectContentById(params.subjectId);

  return (
    <>

      <Header title={`${"subjectName"} - Contenido`} primaryAction={<></>} />

      <main className="flex flex-col flex-1 w-full bg-white rounded-3xl p-8 gap-12">

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-zinc-400">Datos del docente</h2>

          <ul className="flex flex-col gap-2">
            <li className="text-zinc-600"><span className="font-bold">Nombre:</span> Marta Palazon</li>
            <li className="text-zinc-600"><span className="font-bold">Correo:</span> martapalazon@gmail.com</li>
            <li className="text-zinc-600"><span className="font-bold">Teléfono:</span> 000 000 0000</li>
            <li className="text-zinc-600"><span className="font-bold">Consideraciones:</span> Solo atenderé mensajes en el número telefónico antes de las 8 de la noche, el correo lo checo todos los días y ahí pueden mandar cualquier duda o situación a cualquier hora. :)</li>
          </ul>
        </section>

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