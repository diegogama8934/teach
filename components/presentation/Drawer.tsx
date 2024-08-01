"use client";

interface Props {
  isOpen: boolean
  toggle: () => void
}

export function Drawer({ isOpen, toggle }: Props) {


  return (
    <>
      <div
        className={`fixed ${isOpen ? "opacity-100" : "opacity-0"} duration-500 transition-all top-0 left-0 w-screen h-screen bg-black/60`}
        onClick={toggle}
      >
      </div>
      <aside className={`flex ${isOpen ? "translate-x-0" : "translate-x-full"} duration-500 fixed top-0 right-0 w-64 h-screen bg-zinc-50`}>

      </aside>
    </>
  );
}