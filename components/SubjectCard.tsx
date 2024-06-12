interface Tag {
  id: string
  name: string
  value: string
}

interface SubjectCardProps {
  name: string
  teacher: string
  tags: Tag[]
  onTimeActs?: number
  lessTimeActs?: number
  lowTimeActs?: number
}

export default function SubjectCard({ name, teacher, tags, onTimeActs, lessTimeActs, lowTimeActs }: SubjectCardProps) {

  if (tags.length > 0) return CardWithTags(name, teacher, tags, onTimeActs, lessTimeActs, lowTimeActs);

  return Card(name, teacher, onTimeActs, lessTimeActs, lowTimeActs);

}

function Card(
  name: string,
  teacher: string,
  onTimeActs: number | undefined,
  lessTimeActs: number | undefined,
  lowTimeActs: number | undefined) {
  return (
    <div className="h-80 w-[420px] bg-zinc-50 rounded-xl flex flex-col justify-center items-center gap-2">
      <h3 className="text-2xl font-bold text-primaryColor">{name.length != 0 ? name : "Nombre de la materia"}</h3>
      <p className="bg-primaryColor w-full text-center text-white py-2">{teacher}</p>
      {
        (onTimeActs || lessTimeActs || lowTimeActs) &&
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-red-500 text-white">{lowTimeActs}</div>
          <div className="w-12 h-12 bg-amber-500 text-white">{lessTimeActs}</div>
          <div className="w-12 h-12 bg-green-500 text-white">{onTimeActs}</div>
        </div>
      }
    </div>
  );
}

function CardWithTags(name: string, teacher: string, tags: Tag[], onTimeActs: number | undefined, lessTimeActs: number | undefined, lowTimeActs: number | undefined) {
  return (
    <div className="h-80 w-[420px] bg-zinc-50 rounded-xl flex flex-col justify-start items-center gap-4 p-6">
      <div className="w-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-primaryColor w-full text-left">{name}</h3>
          <p className="">{teacher}</p>
        </div>
        {
          (onTimeActs || lessTimeActs || lowTimeActs) &&
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-red-500 text-white">{lowTimeActs}</div>
            <div className="w-12 h-12 bg-amber-500 text-white">{lessTimeActs}</div>
            <div className="w-12 h-12 bg-green-500 text-white">{onTimeActs}</div>
          </div>
        }
      </div>
      <ul className="w-full pl-4">
        {
          tags.map(tag => (
            <li key={tag.id} className="list-disc my-2">
              <span className="font-bold">{tag.name.length != 0 ? tag.name : "Campo"}</span>: <span>{tag.value.length != 0 ? tag.value : "Valor"}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

