// src/app/page.tsx
import React from 'react';

// Importamos la estructura global (Header y Footer)
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Importamos las secciones en el orden de conversión de la Landing Page
import Hero from '@/components/sections/Hero';
import Logos from '@/components/sections/Logos';             // Logos de marcas/confianza
import Problems from '@/components/sections/Problems';       // El problema actual que tiene el cliente
import Benefits from '@/components/sections/Benefits';       // Los beneficios generales
import Features from '@/components/sections/Features';       // Módulos generales del sistema
import Dasboard from '@/components/sections/Dashboard';       // Vista del administrador
import EmployeePanel from '@/components/sections/EmployeePanel'; // Vista del chofer en ruta
import Pricing from '@/components/sections/pricing/Pricing';         // Tus planes de precios
//import Testimonials from '@/components/sections/Testimonials'; // Prueba social
import FAQ from '@/components/sections/FAQ';                 // Preguntas frecuentes (Oro para SEO)
import CTA from '@/components/sections/CTA';
import WhatsappFloating from "@/components/ui/WhatsappFloating";                 // Cierre final para que se registren
import Founder from '@/components/sections/Founder';

export default function LandingPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans antialiased selection:bg-blue-500 selection:text-white">
      
      {/* 1. Header / Navbar global */}
      <Header />

      {/* 2. Cuerpo Principal de la Landing Page */}
      <main>
       <section id="hero">
        <Hero />
      </section>
        <Logos />
        <Problems />
        <Benefits />
        <section id="caracteristicas">
        <Features />
      </section>
        
        {/* Bloque enfocado en el Admin y el Chofer */}
        <section id="dashboard">
          <Dasboard />
        </section>
        <EmployeePanel />
        
        <section id="pricing">
        <Pricing />
      </section>
      {/*  <Testimonials /> implementar cuadno tenga testimonials */}
        <section id="faq">
        <FAQ />
      </section>
        <section id="cta">
        <CTA />
      </section>
       
       
      </main>

      {/* 3. Footer global */}
      <Footer />
      <WhatsappFloating />

    </div>
  );
}