import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Users,
  Route,
  Package,
  ShoppingCart,
  ClipboardList,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestión de clientes",
    description:
      "Administra la información de tus clientes, consulta su historial de compras y mantén una base de datos organizada para ofrecer un mejor servicio.",
  },
  {
    icon: Route,
    title: "Rutas y viajes inteligentes",
    description:
      "Crea rutas, asigna viajes diarios y controla qué productos salen a reparto junto con el vendedor responsable.",
  },
  {
    icon: Package,
    title: "Inventario y productos",
    description:
      "Lleva un control preciso del inventario, registra entradas y salidas de productos y consulta el historial completo de movimientos.",
  },
  {
    icon: ShoppingCart,
    title: "Compras a proveedores",
    description:
      "Registra compras de productos e insumos para mantener actualizado el inventario y controlar el abastecimiento de tu empresa.",
  },
  {
    icon: ClipboardList,
    title: "Panel para administradores y vendedores",
    description:
      "Cada usuario accede únicamente a las funciones que necesita. El administrador controla toda la operación y el vendedor registra ventas, viajes y cierres de caja.",
  },
  {
    icon: BarChart3,
    title: "Reportes en tiempo real",
    description:
      "Obtén información actualizada sobre ventas, inventario, clientes, rutas y desempeño de tu empresa para tomar mejores decisiones.",
  },
];

export default function Features() {
  return (
    <section
      id="caracteristicas"
      className="bg-[var(--color-background)] py-24"
    >
      <Container>
        <SectionTitle
          badge="Funciones principales"
          title="Todo lo que necesita una distribuidora de agua en una sola plataforma"
          description="AquaRuta reúne las herramientas esenciales para administrar clientes, rutas, inventario, ventas y empleados desde cualquier lugar."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-3xl border border-[var(--color-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-[var(--color-foreground)]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--color-muted)]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Estadísticas */}
        <div className="mt-24 rounded-3xl bg-[var(--color-primary)] p-10 text-white">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="mt-2 text-sm opacity-90">
                Control de la operación
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2 text-sm opacity-90">
                Acceso desde cualquier lugar
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">∞</h3>
              <p className="mt-2 text-sm opacity-90">
                Historial de movimientos
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">1</h3>
              <p className="mt-2 text-sm opacity-90">
                Plataforma para todo el negocio
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}