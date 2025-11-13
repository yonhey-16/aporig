import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./componentes/navbar"; // ✅ importa tu navbar

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miniapps",
  description: "Colección de mini aplicaciones divertidas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {/* ✅ Navbar siempre visible */}
        <NavBar />

        {/* ✅ Contenido principal con espacio debajo del navbar */}
        <main className="pt-16 px-4">{children}</main>
      </body>
    </html>
  );
}
