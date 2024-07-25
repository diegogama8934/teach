import { Header } from "@/components/atoms";

interface Props {
  params: { subjectId: string }
}

async function getSubjectNameById(subjectId: string): Promise<string> {


  return "Nombre de la materia";
}

export default async function StudentWorkPage({ params }: Props) {

  const subjectName = await getSubjectNameById(params.subjectId);

  return (
    <>

      <Header title={`${subjectName} - Mi trabajo`} primaryAction={<></>} />

      <main className="flex flex-col flex-1 w-full bg-white rounded-3xl p-8">

      </main>
    </>
  );
}