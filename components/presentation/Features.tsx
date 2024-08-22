"use client"
import Image from "next/image";
import { LandingFeatures } from "@/constants";

export function Features() {


  return (
    <section className="flex flex-col px-12 lg:px-48 bg-zinc-50 py-12 lg:py-24 gap-8">
      <h2 className="lg:text-3xl text-xl text-zinc-600 font-semibold">Características</h2>
      <div className="flex lg:flex-row flex-col lg:gap-24">
        {
          LandingFeatures.map(({ description, img1src, img2src, title }) => (
            <div className="flex flex-1 flex-col gap-4" key={title}>
              <div className="relative w-full h-72">
                <Image
                  src={img1src}
                  width={240}
                  height={240}
                  alt="XD"
                  className="shadow my-8 rounded-xl absolute top-0 left-0"
                  priority
                />
                <Image
                  src={img2src}
                  width={240}
                  height={240}
                  alt="XD"
                  className="shadow my-8 rounded-xl absolute bottom-0 right-0"
                  priority
                />
              </div>

              <h3 className="lg:text-xl text-md font-semibold text-zinc-600">{title}</h3>
              <p className="text-zinc-600 lg:text-base text-sm">{description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}