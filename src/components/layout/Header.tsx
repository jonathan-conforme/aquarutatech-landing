"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Img from "next/image";

import Container from "../ui/Container";
import Button from "../ui/Button";

const navigation = [
  { name: "Inicio", href: "/#hero" },
  { name: "Características", href: "/#caracteristicas" },
  { name: "Dashboard", href: "/#dashboard" },
  { name: "Planes", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/#cta" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full",
        "border-b border-[var(--color-border)]",
        "bg-white/80 backdrop-blur-md transition-colors duration-300"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo - UX: Área de clic amplia y responsive */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="AquaRuta - Volver al inicio"
          >
            {/* Contenedor de la Imagen arreglado con 'relative' y 'aspect-square' para mantener proporción cuadrada */}
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
              <Img
                src="/icons/icon-512x512.png"
                alt="Logo de AquaRuta"
                fill
                sizes="36px"
                className="object-contain" /* object-cover y rounded-full aseguran el círculo perfecto */
                priority
              />
            </div>

            <div>
              <span className="block text-xl font-bold text-slate-900 tracking-tight dark:text-white">
                Aqua<span className="text-blue-500">RutaTech</span>
              </span>
              <p className="text-xs font-medium text-[var(--color-muted)] leading-none mt-0.5">
                Software SaaS
              </p>
            </div>
          </Link>

          {/* Navegación Desktop - SEO: Etiquetas semánticas */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botones de Acción Desktop */}
          <div className="hidden items-center gap-4 md:flex">

            {/* Botón de Acción Desktop - Ahora único y destacado */}
            <div className="hidden items-center md:flex">
              <Button className="px-5 py-2.5 text-sm font-semibold">
                <a href={"https://app.aquarutatech.com/login"} target="_blank" rel="noopener noreferrer">
                  Ir a la Plataforma
                </a>
              </Button>
            </div>
          </div>

          {/* Botón Menú Móvil (Hamburguesa) - UI/UX: Accesible con estados ARIA */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-muted)] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={clsx(
                  "h-0.5 w-full bg-current rounded-full transform transition-all duration-300 origin-left",
                  isOpen && "rotate-45 translate-x-1"
                )}
              />
              <span
                className={clsx(
                  "h-0.5 w-full bg-current rounded-full transition-all duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={clsx(
                  "h-0.5 w-full bg-current rounded-full transform transition-all duration-300 origin-left",
                  isOpen && "-rotate-45 translate-x-1"
                )}
              />
            </div>
          </button>

        </div>
      </Container>

      {/* Menú Desplegable Móvil - UX/UI: Animación limpia y espaciados cómodos para el dedo */}
      <div
        id="mobile-menu"
        className={clsx(
          "fixed inset-x-0 top-20 bottom-0 z-40 bg-gray-700 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden border-t border-[var(--color-border)]",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="bg-white/95 flex flex-col p-6 space-y-6" aria-label="Navegación móvil">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[var(--color-foreground)] border-b border-slate-100 pb-2 transition-colors active:text-[var(--color-primary)]"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-4">

            <Button className="w-full h-11">
              <a href={"https://app.aquarutatech.com/login"} target="_blank" rel="noopener noreferrer">
                Plataforma
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}