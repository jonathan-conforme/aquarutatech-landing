import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PricingCard from "./PricingCard";
import { plans } from "./plans";

import {
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Headset,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-50 py-28"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_55%)] opacity-70" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Inicia sin riesgos"
          title="Elige el plan que mejor se adapta a tu distribuidora"
          description="Únete a los primeros en digitalizar sus rutas. Prueba AquaRutaTech completamente gratis por 14 días con soporte local garantizado."
        />

        {/* Planes */}
        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Facturación electrónica */}

        <div className="mt-24 rounded-[32px] border border-sky-200 bg-white p-10 shadow-xl">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                <FileText size={18} />
                Próximamente
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                Facturación Electrónica
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Muy pronto podrás activar el módulo de Facturación
                Electrónica en cualquiera de los planes de AquaRuta.

                Será un complemento opcional para que solamente pagues
                si realmente lo necesitas.
              </p>

              <ul className="mt-8 space-y-4">

                <li className="flex items-center gap-3">

                  <ShieldCheck
                    className="text-green-600"
                    size={20}
                  />

                  Compatible con cualquier plan.

                </li>

                <li className="flex items-center gap-3">

                  <ShieldCheck
                    className="text-green-600"
                    size={20}
                  />

                  Activación cuando tú decidas.

                </li>

                <li className="flex items-center gap-3">

                  <ShieldCheck
                    className="text-green-600"
                    size={20}
                  />

                  Precio independiente.

                </li>

              </ul>

            </div>

            <div className="rounded-3xl bg-sky-600 p-10 text-white">

              <p className="text-sm uppercase tracking-widest">
                Próximamente
              </p>

              <h4 className="mt-4 text-5xl font-black">
                Nueva Versión
              </h4>

              <p className="mt-6 max-w-xs leading-7 text-sky-100">
                Estamos trabajando para incorporar la facturación
                electrónica directamente dentro de AquaRuta.
              </p>

            </div>

          </div>

        </div>

        {/* Garantías */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-8 shadow-sm">

            <Clock3
              className="text-sky-600"
              size={34}
            />

            <h4 className="mt-5 font-bold">
              14 días gratis
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Explora todas las funciones sin costo.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">

            <BadgeDollarSign
              className="text-sky-600"
              size={34}
            />

            <h4 className="mt-5 font-bold">
              Sin permanencia
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Cancela tu suscripción cuando quieras.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">

            <ShieldCheck
              className="text-sky-600"
              size={34}
            />

            <h4 className="mt-5 font-bold">
              Sin tarjeta
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Comienza tu prueba sin ingresar métodos de pago.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">

            <Headset
              className="text-sky-600"
              size={34}
            />

            <h4 className="mt-5 font-bold">
              Soporte local
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Atención en español para empresas de Ecuador.
            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 rounded-[36px] bg-sky-600 p-14 text-center text-white shadow-2xl">

          <h3 className="text-4xl font-bold">
            Empieza a controlar tu distribuidora hoy mismo
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-sky-100">
            Organiza clientes, rutas, inventario, ventas y empleados
            desde una sola plataforma diseñada para empresas de agua
            embotellada y purificada.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-sky-700 transition hover:scale-105">

            Crear cuenta gratis

            <ArrowRight size={20} />

          </button>

        </div>

      </Container>
    </section>
  );
}