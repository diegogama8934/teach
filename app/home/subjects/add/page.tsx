import Header from "@/components/Header";
import Link from "next/link";
import { Content } from "@/components/addSubject/Content";



export default function Page() {

  return (
    <>

      <Header
        title="Ingresa a una clase"
        secondaryAction={
          <Link
            href={"/home/subjects/add"}
            className="bg-primaryColor border-primaryColor px-4 py-2 border-[1px] text-white rounded-md flex items-center gap-2">
            <span className="inline-block text-sm">Crear una clase</span>
            <span className="material-symbols-rounded !text-white inline-block !text-[18px]">add_circle</span>
          </Link>
        }
        primaryAction={
          <button className="bg-transparent border-primaryColor px-4 py-2 border-[1px] text-primaryColor rounded-md flex items-center gap-2">
            <span className="inline-block text-sm">Ingresa a una clase</span>
            <span className="material-symbols-rounded !text-primaryColor inline-block !text-[18px]">arrow_circle_up</span>
          </button>
        }
      />

      <Content />
    </>
  );
}