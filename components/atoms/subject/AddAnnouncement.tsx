"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export function AddAnnouncement() {
  const [form, setForm] = useState({
    value: ""
  });
  const textareaInput = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <form>
        <div
          className="bg-gray-50 hover:bg-gray-100 p-4 flex items-start gap-2 rounded-lg hover:scale-[101%] cursor-text transition-all"
          onClick={() => {
            console.log(textareaInput.current);
            textareaInput.current?.focus()
          }}
        >
          <Image
            src="/yo3.jpeg"
            width={40}
            height={40}
            alt="Foto de perfil"
            className="w-10 aspect-square object-cover rounded-full"
          />

          <textarea
            placeholder="Comparto algo para la clase"
            className="flex-1 bg-transparent py-2 px-2 rounded-lg focus-visible:outline-none"
            ref={textareaInput}
          />

        </div>
      </form>
    </>
  );
}