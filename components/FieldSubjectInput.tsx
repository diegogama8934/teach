"use client"

interface SubjectData {
  name: string
  textColor: string
  backgroundColor: string
  tags: Tag[]
}

interface Tag {
  id: string
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
    <div className="my-4 flex gap-4 items-center w-full">
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
      <input
        type="text"
        value={tag.name}
        className="bg-gray-200 py-2 px-4 rounded-lg focus-visible:outline-none w-full"
        placeholder="Grupo, semestre, horario..."
        onChange={(e) => {
          let newExtraTags = [...subjectData.tags];
          newExtraTags[index].name = e.target.value;
          setSubjectData({ ...subjectData, tags: newExtraTags });
        }} />
      <input
        type="text"
        value={tag.value}
        className="bg-gray-200 py-2 px-4 rounded-lg focus-visible:outline-none w-full"
        placeholder="Valor del dato"
        onChange={(e) => {
          let newExtraTags = [...subjectData.tags];
          newExtraTags[index].value = e.target.value;
          setSubjectData({ ...subjectData, tags: newExtraTags });
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") handleAddInput();
        }} />
      <button
        className="flex justify-center items-center bg-red-600 rounded-md p-2"
        onClick={() => handleDeleteInput(tag.id)}>
        <span className="material-symbols-rounded block !text-white">delete</span>
      </button>
    </div>
  );
}