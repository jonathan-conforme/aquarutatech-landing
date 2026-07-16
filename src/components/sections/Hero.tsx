import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <Badge color="success">
            Prueba gratis durante 14 días · Sin contratos
          </Badge>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-[var(--color-foreground)] md:text-6xl">
            Controla toda tu distribuidora de agua desde una sola plataforma
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[var(--color-muted)]">
            Administra clientes, rutas, ventas, inventario, compras,
            empleados y caja con un software diseñado exclusivamente
            para empresas distribuidoras de agua.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button>
              Comenzar prueba gratuita
            </Button>

            <Button variant="secondary">
              <a href="#pricing" className="flex items-center gap-2">
                Ver planes
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[var(--color-muted)]">
            <span className="flex items-center gap-1.5"> 
            <CheckCircle2 size={14} className="text-sky-300" /> Sin tarjeta de crédito</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-sky-300" /> Configuración rápida</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-sky-300" /> Soporte para Ecuador</span>
          </div>

          <Image
                  src="/images/lapto.png"
                  alt="Panel del vendedor de AquaRuta"
                  width={1200}
                  height={480}
                  quality={100}
                  priority
                  className="h-auto w-auto"

                />

        </div>
      </Container>
    </section>
  );
}