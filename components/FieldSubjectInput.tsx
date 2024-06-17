"use client"

interface SubjectData {
  name: string
  textColor: string
  backgroundColor: string
  tags: Tag[]
}

interface Tag {
  id?: string
  name: string
  value: string
}

export default function FieldSubjectInput({ tag, subjectData, setSubjectData, index, handleAddInput }: { tag: Tag, subjectData: SubjectData, setSubjectData: any, index: number, handleAddInput: any }) {

  const handleDeleteInput = (tagId: string) => {
    setSubjectData({
      ...subjectData,
      tags: subjectData.tags.filter(tag => tag.id != tagId)
    });
  }

  const handleFieldUp = (index: number) => {

    if (index == 0) return;

    let newArray = [...subjectData.tags];
    newArray[index] = subjectData.tags[index - 1];
    newArray[index - 1] = subjectData.tags[index];

    setSubjectData({
      ...subjectData,
      tags: newArray
    });

  }

  const handleFieldDown = (index: number) => {
    if (index == (subjectData.tags.length - 1)) return;

    let newArray = [...subjectData.tags];
    newArray[index] = subjectData.tags[index + 1];
    newArray[index + 1] = subjectData.tags[index];

    setSubjectData({
      ...subjectData,
      tags: newArray
    })
  }

  return (
    <div className="my-4 flex gap-4 items-end w-full">
      <div className="flex gap-2">
        <button
          className="rounded-lg bg-gray-200 pt-[6px] h-8 w-8"
          onClick={() => handleFieldUp(index)}>
          <span className="material-symbols-rounded">keyboard_arrow_up</span>
        </button>
        <button
          className="rounded-lg bg-gray-200 pt-[6px] h-8 w-8"
          onClick={() => handleFieldDown(index)}>
          <span className="material-symbols-rounded">keyboard_arrow_down</span>
        </button>
      </div>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor=""
          className="text-zinc-400">Nombre del campo</label>
        <input
          id={`${tag.id}-1`}
          type="text"
          value={tag.name}
          autoFocus
          className="bg-gray-200 py-3 px-4 rounded-lg focus-visible:outline-none w-full"
          placeholder="Horario"
          onChange={(e) => {
            let newExtraTags = [...subjectData.tags];
            newExtraTags[index].name = e.target.value;
            setSubjectData({ ...subjectData, tags: newExtraTags });
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") handleAddInput();
            if (e.ctrlKey && e.key == "ArrowUp") handleFieldUp(index);
            if (e.ctrlKey && e.key == "ArrowDown") handleFieldDown(index);
            if (e.ctrlKey && e.key == "D") handleDeleteInput(tag.id!)
          }} />
      </div>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor=""
          className="text-zinc-400">Valor del campo</label>
        <input
          id={`${tag.id}-2`}
          type="text"
          value={tag.value}
          className="bg-gray-200 py-3 px-4 rounded-lg focus-visible:outline-none w-full"
          placeholder="10:00 - 14:00 hrs"
          onChange={(e) => {
            let newExtraTags = [...subjectData.tags];
            newExtraTags[index].value = e.target.value;
            setSubjectData({ ...subjectData, tags: newExtraTags });
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") handleAddInput();
            if (e.ctrlKey && e.key == "ArrowUp") handleFieldUp(index);
            if (e.ctrlKey && e.key == "ArrowDown") handleFieldDown(index);
            if (e.ctrlKey && e.key == "D") handleDeleteInput(tag.id!)
          }} />
      </div>
      <button
        className="flex justify-center items-center bg-red-600 rounded-md p-2 hover:scale-110 transition-all"
        onClick={() => handleDeleteInput(tag.id!)}>
        <span className="material-symbols-rounded block !text-white">delete</span>
      </button>
    </div>
  );
}