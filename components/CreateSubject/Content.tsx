"use client"
import { FormCreateSubject, Card, CardWithTags } from ".";
import { useCreateSubject } from "@/hooks";

export function Content() {

  const {
    form,
    handleAddInput,
    handleRemoveTag,
    handleSubjectNameInput,
    handleTagDown,
    handleTagNameChange,
    handleTagUp,
    handleTagValueChange
  } = useCreateSubject({
    name: "",
    tags: [],
    teacher: "Diego Martínez García", // this value will come from auth context in the future
    accentColor: "",
    userId: "DiegoUserId"
  });

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

        {
          form.tags.length == 0 ? (
            <Card {...form} isCreating></Card>
          ) : (
            <CardWithTags {...form} isCreating></CardWithTags>
          )
        }

        <button className="w-full bg-primaryColor text-white py-3 rounded-md">Crear clase</button>
      </div>

    </div>
  );
}