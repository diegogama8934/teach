"use client"
import Image from "next/image";
import { useRef } from "react";

export function AddCommentOnAnnouncement() {
  const newCommentTextarea = useRef<HTMLTextAreaElement>(null)

  return (
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
  );
}