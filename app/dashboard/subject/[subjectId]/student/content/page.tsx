import { Header } from "@/components";

interface Props {
  params: { subjectId: string }
}

async function getSubjectNameById(subjectId: string): Promise<string> {


  return "Nombre de la materia";
}

export default async function StudentContentPage({ params }: Props) {

  const subjectName = await getSubjectNameById(params.subjectId);

  return (
    <>

      <Header title={`${subjectName} - Contenido`} primaryAction={<></>} />

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

          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-zinc-400">Unidad 1. Sistemas de ecuaciones lineales</h3>
            <ul className="flex flex-col gap-2 list-disc ml-4">
              <li className="text-zinc-600">Ecuaciones lineales</li>
              <li className="text-zinc-600">Sistemas de ecuaciones lineales</li>
              <li className="text-zinc-600">Métodos de solución de sistemas de ecuaciones lineales</li>
              <li className="text-zinc-600">El método de eliminación de Gauss-Jordan</li>
              <li className="text-zinc-600">Tipos de soluciones en los sistemas de ecuaciones lineales</li>
              <li className="text-zinc-600">Sistemas de ecuaciones lineales homogéneos</li>
              <li className="text-zinc-600">Ejercicios con Python, GNU-Octave</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-zinc-400">Unidad 2. Matrices</h3>
            <ul className="flex flex-col gap-2 list-disc ml-4">
              <li className="text-zinc-600">Introducción</li>
              <li className="text-zinc-600">Operaciones con matrices</li>
              <li className="text-zinc-600">Matrices elementales</li>
              <li className="text-zinc-600">Transpuesta de una matriz y sus propiedades</li>
              <li className="text-zinc-600">Matrices diagonales, triangulares y simétricas</li>
              <li className="text-zinc-600">Aplicación de matrices</li>
              <li className="text-zinc-600">Ejercicios con Python, GNU-Octave</li>
            </ul>
          </div>

        </section>
      </main>
    </>
  );
}