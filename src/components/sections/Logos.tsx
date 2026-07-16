import Container from "@/components/ui/Container";

export default function Logos() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-background-alt)] py-12">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Preparado para distribuidoras de agua
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Clientes",
              "Rutas",
              "Ventas",
              "Inventario",
              "Caja",
              "Reportes",
            ].map((item) => (
              <div
                key={item}
                className="flex h-16 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white font-semibold text-[var(--color-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}