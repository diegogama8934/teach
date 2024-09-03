"use client"
import { Hero, Features } from "@/components";
import { Header } from "@/components/presentation/Header";
import dynamic from "next/dynamic";

// const Header = dynamic(()=> import("@/components/presentation/Header").then((mod) => mod.Header), {ssr:false});

export default function Home() {

  return (
    <div className="flex flex-col gap-4 bg-white min-h-screen overflow-y-hidden">

      <Header />

      <Hero />

      <Features />
    </div>
  );
}
