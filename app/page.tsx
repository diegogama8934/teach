import Link from "next/link";
import Image from "next/image";
import { LandingHeader, Hero, Features } from "@/components";

export default function Home() {

  return (
    <div className="flex flex-col gap-4 bg-white min-h-screen overflow-y-hidden">

      <LandingHeader />

      <Hero />

      <Features />
    </div>
  );
}
