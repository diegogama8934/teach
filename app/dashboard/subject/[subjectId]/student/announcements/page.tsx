import { Header, AddAnnouncement, AnnouncementsFeed } from "@/components";
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

      <main className="flex flex-col flex-1 w-full bg-white rounded-3xl p-8 gap-8">
        <AddAnnouncement />
        <AnnouncementsFeed />
      </main>
    </>
  );
}