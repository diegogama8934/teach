"use client"
import { useState } from "react";
import type { subjectData } from "@/utils/Interfaces";
import { FormCreateSubject } from "./FormCreateSubject";
import SubjectCard from "../SubjectCard";

export function Content() {
  const [form, setForm] = useState<subjectData>({
    name: "",
    textColor: "",
    backgroundColor: "",
    tags: []
  });

  function handleSubjectNameInput({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { value } = target;
    setForm({ ...form, name: value });
  }

  function handleAddInput() {
    if (form.tags.length >= 5) return;
    setForm({ ...form, tags: [...form.tags, { id: crypto.randomUUID(), name: "", value: "" }] });
  }

  function handleRemoveTag(tagId: string) {
    setForm({ ...form, tags: form.tags.filter(tag => tag.id != tagId) });
  }

  function handleTagUp(index: number) {
    if (index == 0) return;
    setForm({ ...form, tags: [...form.tags].map((tag, i, tags) => i == index ? tags[index - 1] : i == (index - 1) ? tags[index] : tag) })
  }

  function handleTagDown(index: number) {
    if (index == (form.tags.length - 1)) return;
    setForm({ ...form, tags: [...form.tags].map((tag, i, tags) => i == index ? tags[index + 1] : i == (index + 1) ? tags[index] : tag) })
  }

  function handleTagNameChange(newName: string, index: number) {
    setForm({ ...form, tags: [...form.tags].map((tag, i) => i == index ? { ...tag, name: newName } : tag) });
  }

  function handleTagValueChange(newValue: string, index: number) {
    setForm({ ...form, tags: [...form.tags].map((tag, i) => i == index ? { ...tag, value: newValue } : tag) });
  }

  return (

    <div className="flex gap-4 h-full">

      <FormCreateSubject
        {...form}
        onAddTag={handleAddInput}
        onSubjectNameChange={handleSubjectNameInput}
        onTagRemove={handleRemoveTag}
        onTagUp={handleTagUp}
        onTagDown={handleTagDown}
        onTagChangeName={handleTagNameChange}
        onTagChangeValue={handleTagValueChange}
      />

      <div className="flex flex-col gap-4 max-w-[500px] justify-between">
        <SubjectCard {...form} teacher="Diego Martínez García" />
        <button className="w-full bg-primaryColor text-white py-3 rounded-md">Crear clase</button>
      </div>

    </div>
  );
}