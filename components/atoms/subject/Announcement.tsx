"use client"
import Image from "next/image";
import { useState, useRef } from "react";

export function Announcement() {

  const [areCommentsOpen, setAreCommentsOpen] = useState(false);
  const newCommentTextarea = useRef<HTMLTextAreaElement>(null);


  return (

    <div className="flex gap-4 items-start p-4 border rounded-xl">
      <Image
        src="https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={40}
        height={40}
        alt="Foto de perfil"
        className="w-10 object-cover aspect-square rounded-full object-right"
      />
      <div className="flex flex-col gap-2">

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-zinc-600 -mb-1">Ruth Corona Moreno</span>
            <span className="text-zinc-400">Docente</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-zinc-500">3 comentarios</span>
            <span className="text-zinc-500">26/07/2024</span>
          </div>
        </div>

        <p className="text-zinc-500 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, erat rutrum interdum blandit, nulla erat vehicula mi, a
          pretium magna augue a lorem. Sed et metus id est dictum tincidunt sit amet a felis. Aliquam vitae lacinia lorem. In aliquam
          fermentum nulla, at vulputate ipsum placerat in. Cras elementum suscipit malesuada. Sed ullamcorper ac elit ac elementum.
          Suspendisse sollicitudin porttitor libero, quis porta mi lobortis id. Sed sed leo massa. Nullam in tempus orci. Donec ligula
          risus, consectetur vel nisi ac, semper tristique lectus.
          <br />
          <br />
          Curabitur consectetur lectus ex, ut mollis risus egestas dictum. In sed lorem eu arcu sagittis commodo non mollis massa.
          Vivamus egestas posuere lacus a accumsan. Quisque et risus facilisis, imperdiet leo eu, suscipit lacus. Donec sed cursus
          nunc, a viverra magna. Vestibulum imperdiet vitae diam et blandit. Curabitur et pellentesque lectus. Sed non lacus ac justo
          ullamcorper maximus quis et urna. Vivamus eget enim felis. Proin convallis orci diam, ac placerat arcu aliquet non.
        </p>

        <button
          className="mt-2 self-start px-3 py-2 bg-zinc-50 rounded hover:bg-zinc-100 transition-all hover:scale-105"
          onClick={() => setAreCommentsOpen(prev => !prev)}
        >
          3 comentarios
        </button>

        <div className={`gap-6 py-4 mt-2 transition-all ${areCommentsOpen ? "flex flex-col" : "hidden"}`}>
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
          <hr />
          <div className="flex gap-4 items-start">
            <Image
              src="https://gracedgirl.com/wp-content/uploads/2022/08/how-to-be-a-personable-person-scaled.jpeg"
              width={40}
              height={40}
              alt="Foto de perfil"
              className="w-10 aspect-square object-cover rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-zinc-600">Eva Delgado González</span>
              <span className="text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus a ullam earum. Vero molestiae, sit rem debitis officiis nam ea, similique iste, consectetur odio voluptas aut quas non asperiores.</span>
            </div>
          </div>
          <hr />
          <div className="flex gap-4 items-start">
            <Image
              src="https://sourcesofinsight.com/wp-content/uploads/2015/06/image27.png"
              width={40}
              height={40}
              alt="Foto de perfil"
              className="w-10 aspect-square object-cover rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-zinc-600">Antonio Vázquez Ramírez</span>
              <span className="text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus a ullam earum. Vero molestiae, sit rem debitis officiis nam ea, similique iste, consectetur odio voluptas aut quas non asperiores.</span>
            </div>
          </div>
        </div>

        <div className="flex items-end gap-4">
          <div className="flex-1 py-2 mt-2 flex items-start gap-2 rounded cursor-pointer transition-all" onClick={() => newCommentTextarea.current?.focus()}>
            <Image
              src="/yo3.jpeg"
              width={40}
              height={40}
              alt="Foto de perfil"
              className="w-10 object-cover aspect-square rounded-full object-right mt-2"
            />
            <textarea
              placeholder="Comparto algo para la clase"
              className="flex-1 bg-zinc-50 hover:bg-zinc-100 py-4 px-3 rounded-xl focus-visible:outline-none transition-all hover:scale-[101%]"
              ref={newCommentTextarea}
            />

          </div>
          <button className="bg-primaryColor flex justify-center items-center w-10 h-10 rounded-full mb-2 hover:scale-105 transition-all px-3 py-2">
            <span className="material-symbols-rounded !text-white !text-[20px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}