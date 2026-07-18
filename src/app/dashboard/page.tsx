// app/caracteristicas/page.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Dashboard from "@/components/sections/Dashboard";
import EmployeePanel from "@/components/sections/EmployeePanel"; // Reutiliza el componente que creaste
import Footer from '@/components/layout/Footer';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel Administrativo y de Vendedor",
  description:
    "Descubre cómo AquaRutaTech facilita la gestión de administradores y vendedores con paneles intuitivos para controlar rutas, clientes, ventas, inventario y reportes en tiempo real.",
};

export default function Page() {
  return (
    <main>
        <Header />
        <Dashboard />
        <EmployeePanel />    
      
    <Footer />
    </main>
  );
}