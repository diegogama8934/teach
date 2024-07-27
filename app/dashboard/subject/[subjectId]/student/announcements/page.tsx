import { Header, AddAnnouncement, Announcement } from "@/components";
import { annoucement } from "@/interfaces";
import { FakeAnnoucements } from "@/constants";
import { Metadata } from "next";
interface Props {
  params: { subjectId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  //TODO: getSubjectNameById using params.id and set it like:

  return {
    title: `${"Subject"} - Anuncios`,
    description: `Panel de anuncios de clase de la materia ${"Subject"}`
  }
}

async function getSubjectNameById(subjectId: string): Promise<string> {


  return "Nombre de la materia";
}

async function getAnnoucementsBySubjectId(subjectId: string): Promise<annoucement[]> {


  return FakeAnnoucements
}

export default async function StudentAnnouncementsPage({ params }: Props) {

  const subjectName = await getSubjectNameById(params.subjectId);
  const subjectAnnouncements = await getAnnoucementsBySubjectId(params.subjectId);

  return (
    <>

      <Header title={`${subjectName} - Anuncios de clase`} primaryAction={<></>} />

      <main className="flex flex-col flex-1 w-full bg-white rounded-3xl p-8 gap-8">
        <AddAnnouncement />

        <div className="flex flex-col gap-8">
          {
            subjectAnnouncements.map((announcement, index) => <Announcement key={index} announcement={announcement} />)
          }
        </div>
      </main>
    </>
  );
}