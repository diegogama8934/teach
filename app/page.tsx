import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col gap-4 bg-white min-h-screen">
      <header className="mt-8 px-32 flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <Link href="" className="flex gap-2 items-center mr-12">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="Logo"
            />
            <span className="text-xl tracking-wide text-zinc-800">TEACH</span>
          </Link>

          <Link href={""} className="text-primaryColor font-black">Inicio</Link>
          <Link href={""} className="text-zinc-700">Preguntas frecuentes</Link>
          <Link href={""} className="text-zinc-700">¿Por qué TEACH?</Link>
          <Link href={""} className="text-zinc-700">Guía de usuario</Link>
        </div>
        <div className="flex gap-8">
          <Link href={"/login"} className="">Inicia sesión</Link>
          <Link href={"/signin"} className="">Regístrate</Link>
        </div>
      </header>

      <section className="flex items-center py-24 px-48 justify-between">
        <div className="flex flex-col w-[600px]">
          <h1 className="text-4xl font-semibold leading-snug text-zinc-700">Todo lo que necesitas para clases virtuales en una sola plataforma</h1>
          <p className="mt-4 text-zinc-600">
            Nuestra plataforma te permite administrar y llevar a cabo tus clases virtuales de manera eficiente y sin complicaciones.
            Con herramientas integradas para videoconferencias, gestión de estudiantes y recursos educativos, tendrás todo lo que necesitas
            para ofrecer una experiencia educativa excepcional desde cualquier lugar.
          </p>
          <Link href="" className="bg-primaryColor text-white rounded p-4 w-48 text-center mt-16">Regístrate</Link>
        </div>
        <div className="relative w-[400px] h-[400px]">
          <Image
            src="/hero-image.png"
            width={200}
            height={200}
            alt="someone studying in laptop"
            className="rounded-full aspect-square object-cover shadow-2xl"
          />
          <Image
            src="/hero-image-2.jpeg"
            width={300}
            height={300}
            alt="someone studying in laptop"
            className="rounded-full aspect-square object-cover shadow-2xl absolute right-0 bottom-0"
          />
        </div>
      </section>

      <section className="flex flex-col px-48 bg-zinc-50 py-24 gap-8">
        <h2 className="text-3xl text-zinc-600 font-semibold">Características</h2>

        <div className="flex gap-24">
          <div className="flex flex-1 flex-col gap-4">
            <div className="relative w-full h-72">
              <Image
                src="/workspace-example.png"
                width={240}
                height={240}
                alt="XD"
                className="shadow my-8 rounded-xl absolute top-0 left-0"
              />
              <Image
                src="/activiti-teacher-example.png"
                width={240}
                height={240}
                alt="XD"
                className="shadow my-8 rounded-xl absolute bottom-0 right-0"
              />
            </div>

            <h3 className="text-xl font-semibold text-zinc-600">Gestión integral de clases</h3>
            <p className="text-zinc-600">
              Organiza y administra tus clases con facilidad. Crea horarios, asigna tareas, y lleva un seguimiento detallado del progreso de tus estudiantes.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="relative w-full h-72">
              <Image
                src="/scores-example.png"
                width={240}
                height={240}
                alt="XD"
                className="shadow my-8 rounded-xl absolute top-0 left-0"
              />
              <Image
                src="/next-test-example.jpg"
                width={240}
                height={240}
                alt="XD"
                className="shadow my-8 rounded-xl absolute bottom-0 right-0"
              />
            </div>
            <h3 className="text-xl font-semibold text-zinc-600">Evaluaciones y calificaciones</h3>
            <p className="text-zinc-600">
              Crea y administra exámenes y cuestionarios en línea. Automatiza la calificación y proporciona retroalimentación instantánea a tus estudiantes.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="relative w-full h-72">
              <Image
                src="/subject-content-example.png"
                width={240}
                height={240}
                alt="XD"
                className="shadow my-8 rounded-xl absolute top-0 left-0"
              />
              <Image
                src="/privacy-example.png"
                width={240}
                height={240}
                alt="XD"
                className="shadow my-8 rounded-xl absolute bottom-0 right-0"
              />
            </div>
            <h3 className="text-xl font-semibold text-zinc-600">Seguridad y privacidad</h3>
            <p className="text-zinc-600">
              Protege la información de tus estudiantes y garantiza un entorno de aprendizaje seguro con nuestras medidas privacidad dentro de las clases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
