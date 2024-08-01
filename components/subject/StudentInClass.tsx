import Image from "next/image"


export const StudentInClass = () => {
  return (
    <div className="p-4 bg-zinc-50 flex justify-between items-center rounded-lg hover:bg-zinc-100 cursor-pointer transition-all">
      <div className="flex gap-4">
        <Image
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          width={40}
          height={40}
          alt="Foto de perfil de alumno"
          className="w-10 aspect-square object-cover rounded-full"
        />
        <div className="flex flex-col">
          <span>Óscar Santos Gómez</span>
          <small className="text-zinc-400">oscargomez@gmail.com</small>
        </div>
      </div>
      <div>
        <span className="material-symbols-rounded mt-2">keyboard_arrow_down</span>
      </div>
    </div>
  )
}
