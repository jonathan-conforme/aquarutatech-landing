// src/app/nosotros/page.tsx
import React from 'react';
import Founder from "@/components/sections/Founder"; // Reutiliza el componente que creaste
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia de AquaRutaTech, nuestra misión y cómo ayudamos a las distribuidoras de agua a optimizar sus operaciones con tecnología moderna.",
};
export default function NosotrosPage() {
  return (
    <main>
      {/* Renderiza el componente sin duplicar código */}
      <Header />
      <Founder />
      <Footer />
    </main>
  );
}