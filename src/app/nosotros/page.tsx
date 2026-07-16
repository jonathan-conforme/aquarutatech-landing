// src/app/nosotros/page.tsx
import React from 'react';
import Founder from "@/components/sections/Founder"; // Reutiliza el componente que creaste
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      {/* Renderiza el componente sin duplicar código */}
      <Header />
      <Founder />
      <Footer />
    </main>
  );
}