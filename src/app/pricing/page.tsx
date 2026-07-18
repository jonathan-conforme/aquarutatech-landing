// app/precios/page.tsx

import Pricing from '@/components/sections/pricing/Pricing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Descubre los planes y precios de AquaRutaTech. Elige la opción ideal para gestionar clientes, rutas, inventario, ventas y empleados en tu distribuidora de agua.",
};

export default function Page() {
  return (
    <main>
        <Header />
        <Pricing />
        <Footer />
    </main>
  );
}