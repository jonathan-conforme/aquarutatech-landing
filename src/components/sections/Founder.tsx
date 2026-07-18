import React from 'react';
import Container from "@/components/ui/Container";
import { ShieldCheck, Award, FileText, Eye, Target, CheckCircle2 } from "lucide-react";

export default function Founder() {
  return (
    <section id="sobre-nosotros" className="bg-background-alt py-20 border-t border-border">
      <Container>
        <div className="mx-auto max-w-5xl">
          
          {/* Fila Principal: Fundador + Pilares Corporativos */}
          <div className="grid gap-12 lg:grid-cols-12 items-start">

            {/* LADO IZQUIERDO: Tarjeta de Credenciales y Confianza (4 Columnas) */}
            <div className="lg:col-span-4 bg-background rounded-xl p-6 border border-border shadow-sm flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary text-white shadow-md mb-4">
                <span className="text-3xl font-bold tracking-wider">JC</span>
                <div className="absolute -bottom-1 -right-1 rounded-full bg-primary p-1.5 text-white shadow-sm border-2 border-background">
                  <Award size={16} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground leading-tight">
                Ing. Jonathan Conforme
              </h3>
              <p className="text-sm font-semibold text-primary mt-1">
                Fundador & Director de Tecnología
              </p>
              <p className="text-xs text-muted mt-2 max-w-[200px]">
                Desarrollo de Software y Soporte Técnico Local
              </p>

              {/* Bloque de Información Oficial e Indicadores de Confianza */}
              <div className="w-full mt-6 pt-4 border-t border-border text-left space-y-4">
                {/* RUC */}
                <div className="flex items-start gap-2.5 text-xs text-muted">
                  <FileText size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Información Fiscal:</span>
                    RUC: <strong className="font-mono text-foreground">0953832805001</strong>
                  </div>
                </div>

                {/* Cobertura */}
                <div className="flex items-start gap-2.5 text-xs text-muted">
                  <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Cobertura Nacional:</span>
                    Soporte Remoto para todo el Ecuador 🇪🇨
                  </div>
                </div>

                {/* Lanzamiento / Versión */}
                <div className="flex items-start gap-2.5 text-xs text-muted">
                  <Award size={16} className="text-warning shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Tecnología de Punta:</span>
                    Versión Oficial 2026
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: Carta, Misión y Visión (8 Columnas) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Carta de Confianza */}
              <div className="bg-background rounded-xl p-6 md:p-8 border border-border shadow-sm">
                <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-primary" size={22} />
                  Garantía de Confianza Profesional
                </h4>
                <p className="text-base text-muted leading-relaxed">
                  Diseñé <span className="font-bold text-foreground">AquaRutaTech</span> bajo altos estándares de seguridad y eficiencia con un único propósito: digitalizar y proteger la logística de las distribuidoras en Ecuador. Aquí no tratas con sistemas extranjeros automáticos; cuentas con respaldo técnico directo, soporte en tu propio horario y una plataforma hecha a la medida de tu negocio con facturación electrónica formal.
                </p>
              </div>

              {/* GRID: Misión y Visión */}
              <div className="grid gap-6 sm:grid-cols-2">
                
                {/* Misión */}
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Target size={40} />
                  </div>
                  <div className="inline-flex rounded-lg bg-primary-light p-2.5 text-primary mb-4">
                    <Target size={20} />
                  </div>
                  <h5 className="text-lg font-bold text-foreground">Nuestra Misión</h5>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Dotar a los distribuidores de agua de herramientas tecnológicas sencillas y potentes que eliminen las pérdidas de inventario, optimicen sus rutas de viaje y automaticen sus cierres de caja diarios.
                  </p>
                </div>

                {/* Visión */}
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm relative overflow-hidden group hover:border-secondary/50 transition-colors">
                  <div className="absolute top-4 right-4 text-secondary/10 group-hover:text-secondary/20 transition-colors">
                    <Eye size={40} />
                  </div>
                  <div className="inline-flex rounded-lg bg-secondary-light p-2.5 text-secondary mb-4">
                    <Eye size={20} />
                  </div>
                  <h5 className="text-lg font-bold text-foreground">Nuestra Visión</h5>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Convertirnos en la plataforma logística de referencia en Ecuador para la distribución de agua purificada, impulsando la formalización y el crecimiento rentable de 500 distribuidoras para el año 2030.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}