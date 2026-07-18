// app/faq/page.tsx

import FAQ from "@/components/sections/FAQ";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Resuelve tus dudas sobre AquaRutaTech. Encuentra respuestas sobre precios, funciones, implementación, soporte y el periodo de prueba gratuita.",
};

export default function Page() {
  return (
    <main>
        <Header />
      <FAQ />
      <Footer />
    </main>
  );
}