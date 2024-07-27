import type { Metadata } from "next";
import { Inter, Assistant } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEACH",
  description: "Plataforma de gestion e impartición de clases virtuales",
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-200">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
      </head>
      <UserProvider>
        <body className={assistant.className + " h-screen"}>{children}</body>
      </UserProvider>
    </html>
  );
}
