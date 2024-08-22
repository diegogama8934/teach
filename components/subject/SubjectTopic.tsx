"use client"
import { subjectTopic } from "@/interfaces"

export function SubjectTopic({ topic, topicContent }: subjectTopic) {


  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xl text-zinc-400">{topic}</h4>
      <ul className="flex flex-col gap-2 list-disc ml-4">
        {topicContent.map((item, index) => <li key={index} className="text-zinc-600">{item}</li>)}
      </ul>
    </div>
  );
}