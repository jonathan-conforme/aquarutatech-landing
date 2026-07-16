// src/components/sections/CTA.tsx
import React from 'react';
import Container from "@/components/ui/Container";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="bg-white py-16">
      <Container>
        {/* Contenedor Banner Principal */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 to-sky-700 px-6 py-16 text-center text-white shadow-2xl sm:px-12 md:py-20">
          
          {/* Efecto de luz de fondo sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#38bdf8_0%,transparent_40%)] opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb_0%,transparent_50%)] opacity-30" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Título Principal */}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              ¿Listo para tomar el control de tu distribuidora de agua?
            </h2>
            
            {/* Subtítulo Persuasivo */}
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-blue-100">
              Únete a las plantas y flotas de reparto en Ecuador que ya eliminaron las pérdidas de envases, automatizaron sus cierres de caja y optimizaron sus rutas diarias.
            </p>

            {/* Botón de Registro Principal */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/593980659712?text=Hola,%20quiero%20probar%20el%20Software%20AquaRutaTech.%20Me%20gustaría%20recibir%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 active:scale-95"
              >
                Comenzar prueba de 14 días gratis
                <ArrowRight 
                  size={18} 
                  className="transition-transform duration-200 group-hover:translate-x-1 text-blue-600" 
                />
              </a>
            </div>

            {/* Micro-copias de Confianza debajo del botón */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-blue-100/90">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-sky-300" />
                Sin tarjetas de crédito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-sky-300" />
                Instalación inmediata
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-sky-300" />
                Soporte en Ecuador
              </span>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}