import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

import {
  Smartphone,
  Route,
  Wallet,
  ShoppingCart,
  Receipt,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Viajes asignados",
    description:
      "El vendedor visualiza los viajes y rutas asignadas para comenzar su jornada sin confusiones.",
  },
  {
    icon: Wallet,
    title: "Apertura y cierre de caja",
    description:
      "Registra la apertura de caja al iniciar el recorrido y realiza el cierre al finalizar el día.",
  },
  {
    icon: ShoppingCart,
    title: "Registro de ventas",
    description:
      "Cada venta queda registrada en tiempo real, facilitando el control de productos y dinero.",
  },
  {
    icon: Receipt,
    title: "Historial de ventas",
    description:
      "Consulta todas las ventas realizadas durante los viajes para mantener un seguimiento completo.",
  },
  {
    icon: Clock3,
    title: "Historial de cierres",
    description:
      "Revisa los cierres de caja anteriores para verificar el desempeño diario del vendedor.",
  },
];

export default function EmployeePanel() {
  return (
    <section
      id="panel-vendedor"
      className="bg-[var(--color-background)] py-24"
    >
      <Container>
        <SectionTitle
          badge="Panel del vendedor"
          title="Una aplicación pensada para el personal de reparto"
          description="Cada vendedor dispone de un panel sencillo e intuitivo para gestionar sus viajes, registrar ventas y controlar la caja desde cualquier lugar."
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

          {/* Información */}

          <div>

            <h3 className="text-3xl font-bold text-[var(--color-foreground)]">
              Todo lo necesario durante la ruta
            </h3>

            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              El personal de reparto accede únicamente a las funciones que
              necesita para trabajar. Esto simplifica el proceso de venta,
              mejora el control de la operación y reduce errores.
            </p>

            <div className="mt-10 space-y-6">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--color-foreground)]">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-7 text-[var(--color-muted)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary-light)] p-6">

              <div className="flex items-start gap-3">

                <CheckCircle2
                  size={22}
                  className="mt-1 text-green-600"
                />

                <p className="leading-7 text-[var(--color-foreground)]">
                  El administrador mantiene el control de toda la operación,
                  mientras que el vendedor trabaja desde una interfaz rápida,
                  sencilla y enfocada únicamente en sus tareas diarias.
                </p>

              </div>

            </div>

          </div>

          {/* Mockup */}

          <div className="flex justify-center">

         
                <Image
                  src="/images/nueva.png"
                  alt="Panel del vendedor de AquaRuta"
                  width={240}
                  height={480}
                  quality={100}
                  priority
                  className="h-auto w-auto"
              
                />

              

          </div>

        </div>
      </Container>
    </section>
  );
}