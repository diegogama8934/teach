import { Header } from "@/components";
import Image from "next/image";
interface Props {
  params: { subjectId: string }
}

async function getSubjectNameById(subjectId: string): Promise<string> {


  return "Nombre de la materia";
}

export default async function StudentAnnouncementsPage({ params }: Props) {

  const subjectName = await getSubjectNameById(params.subjectId);

  return (
    <>

      <Header title={`${subjectName} - Anuncios de clase`} primaryAction={<></>} />

      <main className="flex flex-col flex-1 w-full bg-white rounded-3xl p-8">
        <div className="bg-gray-100 px-2">
          <Image
            src="/yo3.jpeg"
            width={40}
            height={40}
            alt="Foto de perfil"
            className="w-10 aspect-square object-cover rounded-full"
          />
          <textarea placeholder="Comparto algo para la clase" className="bg-gray-100 py-3 px-4 rounded-lg focus-visible:outline-none" />

        </div>
      </main>
    </>
  );
}