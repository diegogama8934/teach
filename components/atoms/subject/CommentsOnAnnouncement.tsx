"use client";
import { commentOnAnnouncement } from "@/interfaces";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  comments: commentOnAnnouncement[]
}

export function CommentsOnAnnouncement({ comments }: Props) {
  const [areCommentsOpen, setAreCommentsOpen] = useState(false);

  return (
    <>
      <button
        className="mt-2 self-start px-3 py-2 bg-zinc-50 rounded hover:bg-zinc-100 transition-all hover:scale-105"
        onClick={() => setAreCommentsOpen(prev => !prev)}
      >
        {comments.length} comentarios
      </button>

      <div className={`gap-6 transition-all mt-4 ${areCommentsOpen ? "flex flex-col" : "hidden"}`}>

        {
          comments.map((comment, index) => (
            <React.Fragment key={index}>
              <div className="flex gap-4 items-start">
                <Image
                  src={comment.user.profileImage}
                  width={40}
                  height={40}
                  alt="Foto de perfil"
                  className="w-10 aspect-square object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-zinc-600">{comment.user.fullname}</span>
                  <span className="text-zinc-400">{comment.comment}</span>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))
        }
      </div>

    </>
  );
}