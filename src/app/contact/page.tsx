// app/contacto/page.tsx

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con AquaRutaTech. Agenda una demostración gratuita o solicita más información sobre nuestro software para distribuidoras de agua.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}