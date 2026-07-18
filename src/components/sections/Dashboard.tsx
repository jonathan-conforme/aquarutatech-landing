import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

import {
  LayoutDashboard,
  Users,
  Route,
  Package,
  Wallet,
  ChartColumnIncreasing,
  CheckCircle2,
} from "lucide-react";

const modules = [
  {
    icon: LayoutDashboard,
    title: "Dashboard ejecutivo",
    description:
      "Visualiza el estado general de la empresa desde un solo panel.",
  },
  {
    icon: Users,
    title: "Clientes",
    description:
      "Consulta clientes registrados e historial de compras.",
  },
  {
    icon: Route,
    title: "Rutas y viajes",
    description:
      "Asigna recorridos diarios y controla cada salida.",
  },
  {
    icon: Package,
    title: "Inventario",
    description:
      "Controla productos, movimientos y existencias.",
  },
  {
    icon: Wallet,
    title: "Caja y ventas",
    description:
      "Supervisa ingresos, cierres de caja y ventas realizadas.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Reportes",
    description:
      "Obtén estadísticas para tomar mejores decisiones.",
  },
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="bg-[var(--color-background-alt)] py-24"
    >
      <Container>
        <SectionTitle
          badge="Panel de administración"
          title="Controla toda tu distribuidora desde un único lugar"
          description="AquaRuta ofrece un panel intuitivo donde el administrador puede supervisar clientes, rutas, inventario, ventas, compras y empleados en tiempo real."
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

          {/* Imagen */}

          <Image
                src="/images/lapto.png"
                alt="Panel del administrador de AquaRuta"
                width={640}
                height={480}
                quality={100}
                priority
                className=" w-auto"

              />

          {/* Características */}

          <div>

            <h3 className="text-3xl font-bold text-[var(--color-foreground)]">
              Todo el negocio bajo control
            </h3>

            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              El panel de administración fue diseñado para propietarios
              y administradores de distribuidoras de agua que necesitan
              información clara para tomar decisiones rápidamente.
            </p>

            <div className="mt-10 space-y-6">

              {modules.map((module) => {
                const Icon = module.icon;

                return (
                  <div
                    key={module.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--color-foreground)]">
                        {module.title}
                      </h4>

                      <p className="mt-1 text-sm leading-7 text-[var(--color-muted)]">
                        {module.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-white p-6">

              <div className="flex items-start gap-3">

                <CheckCircle2
                  className="mt-1 text-green-500"
                  size={22}
                />

                <p className="leading-7 text-[var(--color-muted)]">
                  Toda la información se mantiene organizada y disponible
                  para ayudarte a controlar las operaciones diarias de tu
                  distribuidora de agua desde cualquier lugar.
                </p>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}