import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import { UserProvider } from "@/context/UserContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
      <body className={assistant.className + " h-screen"}>
        <UserProvider>

          {children}
          <SpeedInsights />

        </UserProvider>

      </body>
    </html>
  );
}
