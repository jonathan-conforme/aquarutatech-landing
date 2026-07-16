import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const problems = [
  {
    title: "Descontrol de clientes",
    description:
      "Lleva un registro organizado de todos tus clientes, historial de compras y datos de contacto en un solo lugar.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Rutas sin planificación",
    description:
      "Asigna rutas y viajes diarios para que cada vendedor conozca exactamente dónde debe entregar y vender.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 .553-.894L9 2l6 2 6-2v14l-6 2-6-2z" />
        <circle cx="9" cy="8" r="1.5" />
        <circle cx="15" cy="16" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Inventario difícil de controlar",
    description:
      "Conoce qué productos salen, cuáles regresan y mantén un historial completo de movimientos.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      </svg>
    ),
  },
  {
    title: "Falta de control de caja",
    description:
      "Registra aperturas, cierres y ventas para conocer el dinero generado por cada recorrido.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

export default function Problems() {
  return (
    <section
      id="problemas"
      className="bg-[var(--color-background)] py-24"
    >
      <Container>
        <SectionTitle
          badge="¿Te resulta familiar?"
          title="Los problemas diarios de una distribuidora de agua"
          description="AquaRuta fue creado para eliminar las tareas manuales, reducir errores y darte un mayor control sobre tu operación."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="rounded-3xl border border-[var(--color-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                {problem.icon}
              </div>

              <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                {problem.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--color-muted)]">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}