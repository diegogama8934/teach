"use client";
import Image from "next/image";


export function CommentOnAnnouncement() {


  return (
    <div className="flex gap-4 items-start">
      <Image
        src="https://www.wikihow.com/images/thumb/9/90/What_type_of_person_are_you_quiz_pic.png/1200px-What_type_of_person_are_you_quiz_pic.png"
        width={40}
        height={40}
        alt="Foto de perfil"
        className="w-10 aspect-square object-cover rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-zinc-600">Jorge Ramos Balderas</span>
        <span className="text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus a ullam earum. Vero molestiae, sit rem debitis officiis nam ea, similique iste, consectetur odio voluptas aut quas non asperiores.</span>
      </div>
    </div>
  );
}