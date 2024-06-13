import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {


  return (
    <div className="flex">
      <aside className="bg-zinc-100 p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 flex justify-center items-center">
            <span className="material-symbols-rounded !text-green-800">cast_for_education</span>
          </div>
          <div className="flex flex-col gap-2">
            <button className="w-10 h-10 text-center rounded-md hover:bg-zinc-200">
              <span className="material-symbols-rounded !text-green-800">home</span>
            </button>
            <button className="w-10 h-10 text-center rounded-md hover:bg-zinc-200">
              <span className="material-symbols-rounded !text-green-800">menu_book</span>
            </button>
            <button className="w-10 h-10 text-center rounded-md hover:bg-zinc-200">
              <span className="material-symbols-rounded !text-green-800">background_replace</span>
            </button>
            <button className="w-10 h-10 text-center rounded-md hover:bg-zinc-200">
              <span className="material-symbols-rounded !text-green-800">description</span>
            </button>
            <button className="w-10 h-10 text-center rounded-md hover:bg-zinc-200">
              <span className="material-symbols-rounded !text-green-800">calendar_month</span>
            </button>
          </div>
        </div>
        <button className="flex justify-center items-center w-10 h-10 hover:bg-zinc-200">
          <span className="material-symbols-rounded !text-green-800">settings</span>
        </button>
      </aside>
      <div className="flex flex-col p-4 w-full gap-4 h-screen overflow-auto">
        {children}
      </div>
    </div>
  );
}