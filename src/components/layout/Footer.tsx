// src/components/layout/Footer.tsx
import React from 'react';
import Container from "@/components/ui/Container";
import { MessageSquare, Shield, HelpCircle, FileSpreadsheet } from "lucide-react";
import Image from 'next/image';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Columna 1: Branding / Eslogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* Icono Isotopo Temporal */}
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/icons/icon-192x192.png"
                  alt="AquaRuta Logo"
                  fill // Reemplaza h-full w-full de Tailwind en Next.js
                  sizes="36px"
                  className="object-contain"
                  priority // Carga la imagen con prioridad si es parte de la identidad
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Aqua<span className="text-blue-500">RutaTech</span>
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              Software especializado para el control de rutas, inventario de envases y cierre de caja en distribuidoras de agua purificada.
            </p>
          </div>

          {/* Columna 2: Producto */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Plataforma
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#caracteristicas" className="hover:text-blue-400 transition-colors">Características</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">Planes y Precios</a>
              </li>
              <li><a href="/nosotros" className="hover:text-blue-400 transition-colors">Sobre el fundador</a></li>
            </ul>
          </div>

          {/* Columna 3: Soporte / Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Soporte y Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <HelpCircle size={14} /> Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="https://aguaruta.congresoticunesum.com/privacidad" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Shield size={14} /> Privacidad de datos
                </a>
              </li>
              <li>
                <a href="https://aguaruta.congresoticunesum.com/terminos" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <FileSpreadsheet size={14} /> Términos del servicio
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto directo local */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contacto Local
            </h4>
            <p className="mt-4 text-sm text-slate-400 leading-6">
              ¿Tienes dudas específicas sobre la integración en tu planta purificadora?
            </p>
            <div className="mt-4">
              <a
                href="https://wa.me/593980659712?text=Hola,%20solicito%20información%20sobre%20el%20software%20AquaRuta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 hover:text-blue-400 transition-all shadow-sm"
              >
                <MessageSquare size={16} className="text-green-500" />
                Soporte por WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Separador e información inferior */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {currentYear} AquaRuta. Todos los derechos reservados. Diseñado para distribuidoras de agua en Ecuador.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-slate-500">
            <span className="font-mono">RUC: 0953832805001</span>
            <span className="hidden sm:inline">|</span>
            <span>Ing. Jonathan Conforme</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}