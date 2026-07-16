import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AquaRutaTech | Software para Distribuidoras de Agua en Ecuador",
    template: "%s | AquaRutaTech",
  },

  description:
    "Administra clientes, rutas, ventas, inventario, empleados y caja desde una sola plataforma. Prueba gratis durante 14 días y sin contratos de permanencia.",

  keywords: [
    "software para distribuidoras de agua",
    "software para agua embotellada",
    "software para agua purificada",
    "software para reparto de agua",
    "software para rutas de agua",
    "software para venta de agua",
    "software para empresas de agua",
    "software para distribuidores de agua",
    "software Ecuador",
    "AquaRutaTech",
  ],

  authors: [
    {
      name: "AquaRutaTech",
    },
  ],

  creator: "AquaRutaTech",
  publisher: "AquaRutaTech",

  robots: {
    index: true,
    follow: true,
  },

  // ¡Perfecto! Ya está activo apuntando al nuevo dominio
  metadataBase: new URL("https://aquarutatech.com"),

 icons: {
    icon: [
      { url: "https://aquarutatech.com/icons/icon-512x512.png", type: "image/png" }
    ],
    apple: [
      { url: "https://aquarutatech.com/icons/icon-512x512.png", type: "image/png" }
    ],
  },

  openGraph: {
    title: "AquaRutaTech | Software para Distribuidoras de Agua",
    description:
      "Controla clientes, rutas, ventas, inventario y empleados desde una sola plataforma.",
    siteName: "AquaRutaTech",
    locale: "es_EC",
    type: "website",
    url: "https://aquarutatech.com",
    images: [
      {
        url: "https://aquarutatech.com/images/AquaRuta.png",
        width: 1200,
        height: 630,
        alt: "AquaRutaTech - Software para distribuidoras de agua",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AquaRutaTech | Software para Distribuidoras de Agua",
    description:
      "Software especializado para empresas distribuidoras de agua en Ecuador.",
   images: ["https://aquarutatech.com/images/AquaRuta.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}