// src/components/sections/Founder.tsx
import React from 'react';
import Container from "@/components/ui/Container";
import { ShieldCheck, Award } from "lucide-react";

export default function Founder() {
  return (
    <section id="sobre-nosotros" className="bg-slate-50 py-16 border-t border-slate-100">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            
            {/* Lado Izquierdo: Foto/Avatar & Título */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              {/* Círculo para foto o iniciales */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 text-white shadow-md mb-4">
                <span className="text-3xl font-bold tracking-wider">JI</span>
                <div className="absolute -bottom-1 -right-1 rounded-full bg-blue-600 p-1.5 text-white shadow">
                  <Award size={16} />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                Ing. Jonathan conforme 
              </h3>
              <p className="text-sm font-semibold text-blue-600 mt-1">
                Fundador & Ingeniero en TIC
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Soporte y Desarrollo de Software
              </p>
            </div>

            {/* Lado Derecho: Carta de Confianza y Datos del SRI */}
            <div className="md:col-span-8 flex flex-col justify-center border-t border-slate-100 pt-6 md:border-t-0 md:pt-0 md:border-l md:pl-8">
              <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                <ShieldCheck className="text-blue-500" size={20} />
                Garantía de Confianza Profesional
              </h4>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Como Ingeniero en TIC, diseñé Aqua<strong className="text-sm font-semibold text-blue-600 mt-1">RutaTech</strong> bajo altos estándares de seguridad y eficiencia con un único propósito: digitalizar y proteger el trabajo diario de las distribuidoras en Ecuador. Aquí no tratas con bots extranjeros; cuentas con respaldo técnico local, directo y facturación electrónica formal.
              </p>

              {/* Bloque Legal / RUC */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 block">Información Fiscal:</span>
                  RUC: <span className="font-mono">0953832805001</span> {/* Reemplaza con tu RUC real */}
                </div>
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 block">Ubicación y Cobertura:</span>
                  Servicio activo para todo el Ecuador 🇪🇨
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}