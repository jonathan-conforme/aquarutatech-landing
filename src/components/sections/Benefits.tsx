import React from 'react';
import { 
  BarChart3, 
  ShieldCheck, 
  Clock3, 
  Route, 
  Wallet, 
  Smartphone,
  ChevronRight 
} from "lucide-react";

// Si ya tienes estos componentes importados en tu archivo original, 
// puedes borrar estas líneas de fallback:
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Benefits() {
  return (
    <section 
      id="beneficios" 
      className="bg-[var(--color-background-alt)] py-24 transition-colors duration-300"
    >
      <Container>
        <SectionTitle
          badge="Beneficios"
          title="Más control, menos trabajo manual y mejores decisiones"
          description="AquaRuta ayuda a las distribuidoras de agua a optimizar sus operaciones diarias, mejorar el control del negocio y ofrecer un servicio más eficiente a sus clientes."
        />

        {/* Bento Grid Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6">
          
          {/* Card 1: Reportes (Grande - Destacado en Blanco) */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden bg-[var(--color-background)] p-8 rounded-[var(--radius)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  Reportes para tomar mejores decisiones
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed max-w-sm">
                  Consulta ventas, movimientos, inventario y rendimiento de tus rutas desde un solo lugar.
                </p>
              </div>
              <div className="mt-12 flex items-center text-[var(--color-primary)] font-semibold group/link cursor-pointer hover:text-[var(--color-primary-hover)]">
                Explorar reportes 
                <ChevronRight size={18} className="ml-1 transition-transform group-hover/link:translate-x-1" />
              </div>
            </div>
            {/* Efecto de luz ambiental en la esquina */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[var(--color-primary-light)] rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          </div>

          {/* Card 2: Rutas (Mediana - Fondo Oscuro de la marca) */}
          <div className="md:col-span-3 bg-[var(--color-foreground)] p-8 rounded-[var(--radius)] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-6 group transition-all duration-300 shadow-xs hover:shadow-lg">
            <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-2xl bg-white/10 text-[var(--color-secondary)] transition-transform duration-300 group-hover:rotate-6">
              <Route size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Mayor control de las rutas de reparto
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Organiza los viajes diarios y conoce qué productos salen, regresan y se venden durante cada recorrido.
              </p>
            </div>
          </div>

          {/* Card 3: Control de Caja (Pequeña) */}
          <div className="md:col-span-3 lg:col-span-2 bg-[var(--color-background)] p-6 rounded-[var(--radius)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-xs hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[var(--color-success-light)] text-[var(--color-success)]">
                <Wallet size={22} />
              </div>
              <h3 className="font-bold text-[var(--color-foreground)] text-lg">
                Control de caja más seguro
              </h3>
            </div>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Registra aperturas, cierres y ventas para mantener un historial claro del dinero generado por cada vendedor.
            </p>
          </div>

          {/* Card 4: Vendedores Conectados (Pequeña - Color Secundario de acento) */}
          <div className="md:col-span-3 lg:col-span-1 bg-[var(--color-secondary)] p-6 rounded-[var(--radius)] text-white group overflow-hidden relative cursor-pointer hover:bg-[var(--color-primary)] transition-colors duration-300 shadow-xs hover:shadow-lg">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <Smartphone size={26} className="mb-4" />
              <h3 className="font-bold text-base leading-snug">
                Vendedores conectados en tiempo real
              </h3>
            </div>
            {/* Icono gigante marca de agua al fondo */}
            <div className="absolute right-[-15%] bottom-[-15%] text-white/15 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
               <Smartphone size={100} />
            </div>
          </div>

        </div>

        {/* Sección de beneficios secundarios con diseño ultra-limpio en hilera */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-[var(--color-border)]">
          <div className="flex gap-4 group">
             <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
               <Clock3 size={20} />
             </div>
             <div>
               <h4 className="font-bold text-[var(--color-foreground)] mb-1 text-lg">
                 Ahorra tiempo cada día
               </h4>
               <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                 Reduce tareas manuales y evita registros en papel gracias a una plataforma centralizada.
               </p>
             </div>
          </div>

          <div className="flex gap-4 group">
             <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-secondary-light)] text-[var(--color-secondary)]">
               <ShieldCheck size={20} />
             </div>
             <div>
               <h4 className="font-bold text-[var(--color-foreground)] mb-1 text-lg">
                 Información organizada y segura
               </h4>
               <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                 Toda la información de clientes, empleados, productos y ventas permanece almacenada en la nube.
               </p>
             </div>
          </div>
        </div>

      </Container>
    </section>
  );
}