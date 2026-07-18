"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import {
  MessageCircle,
  ArrowRight,
  Truck,
  Layers,
  DollarSign,
  ClipboardCheck,
  Phone,
  Mail,
  Clock3
} from "lucide-react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("ventas");

  const features = {
    ventas: {
      title: "Control de Ventas e Inventario",
      desc: "Monitorea cuántos botellones salen, cuántos regresan vacíos y las ventas del día en tiempo real.",
      icon: <Layers size={20} />
    },
    viajes: {
      title: "Logística y Creación de Viajes",
      desc: "Asigna rutas óptimas a tus camiones repartidores y controla la carga de cada unidad.",
      icon: <Truck size={20} />
    },
    caja: {
      title: "Cierres de Caja sin Errores",
      desc: "Cuadra el dinero en efectivo, transferencias y créditos de los choferes al terminar la jornada.",
      icon: <DollarSign size={20} />
    }
  };

  return (
    <section className="bg-background-alt py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-6xl">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* COLUMNA IZQUIERDA: Demostración de dolores */}
            <div className="lg:col-span-6">
                
              <span className="rounded-full bg-primary-light px-4 py-1 text-sm font-semibold text-primary">
                Lleva el control de tu distribuidora
              </span>

              <h2 className="mt-5 text-4xl font-extrabold text-foreground sm:text-5xl tracking-tight leading-tight">
                Digitaliza tus rutas y dile adiós al descontrol
              </h2>

              <p className="mt-4 text-lg text-muted">
                Mira cómo AquaRutaTech resuelve los dolores diarios de tu logística antes de agendar tu demostración:
              </p>

              {/* Selector interactivo con tus tokens */}
              <div className="mt-8 space-y-3">
                {Object.entries(features).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 ${
                      activeTab === key
                        ? "bg-background border-primary shadow-md text-foreground"
                        : "bg-transparent border-border hover:bg-background text-muted"
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${activeTab === key ? "bg-primary text-white" : "bg-border text-foreground"}`}>
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-base">{value.title}</h4>
                      {activeTab === key && (
                        <p className="mt-2 text-sm text-muted animate-fadeIn">
                          {value.desc}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Contacto Directo Secundario */}
              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
                <a href="tel:+593980659712" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={16} /> +593 98 065 9712
                </a>
                <a href="mailto:contacto@aquarutatech.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={16} /> soporte@aquarutatech.com
                </a>
                <div className="flex items-center gap-2">
                  <Clock3 size={16} /> Lun-Vie (08:00 - 18:00)
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: El CTA con Alto Contraste usando tu "Primary" */}
            <div className="lg:col-span-6">
              {/* Usamos el color corporativo PRINCIPAL de fondo para generar el impacto UX */}
              <div className="relative overflow-hidden rounded-xl bg-primary p-8 md:p-12 text-white shadow-2xl shadow-primary/20">
                
                {/* Icono de fondo decorativo sutil */}
                <div className="absolute top-0 right-0 p-8 opacity-15 pointer-events-none text-white">
                  <ClipboardCheck size={180} />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex rounded-lg bg-white/10 p-3 backdrop-blur-sm mb-6 border border-white/20">
                    <MessageCircle size={32} />
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    ¿Quieres ver cómo funciona con tus propios datos?
                  </h3>

                  <p className="mt-4 text-white/90 leading-relaxed text-base">
                    Agenda una videollamada de <strong className="text-white font-extrabold">30 minutos</strong>. Te mostraremos el sistema en vivo simulando una carga de camión, una ruta de entregas y un cierre de caja.
                  </p>

                  <div className="mt-8 flex flex-col gap-3">
                    {/* Botón de WhatsApp: En blanco para romper el fondo azul y saltar a la vista */}
                    <a
                      href="https://wa.me/593980659712?text=Hola,%20quiero%20ver%20una%20demo%20de%20AquaRutaTech%20para%20mi%20distribuidora."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-primary shadow-lg transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
                    >
                      Agendar Demo por WhatsApp
                      <ArrowRight size={18} />
                    </a>

                    {/* Botón de Correo Secundario sutil */}
                    <a
                      href="mailto:contacto@aquarutatech.com"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-[0.98]"
                    >
                      Escribir por Correo Electrónico
                    </a>
                  </div>

                  <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs text-white/80">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <span>Soporte e implementación disponible para todo Ecuador</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}