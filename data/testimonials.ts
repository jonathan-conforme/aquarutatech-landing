// src/data/testimonials.ts

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  stars: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    role: "Gerente General",
    company: "Purificadora AquaVida",
    location: "Guayaquil",
    content: "Antes de AquaRuta, los choferes siempre regresaban con botellones faltantes o descuadres en la caja. Ahora controlo el inventario cargado y las ventas del día desde mi celular. El cambio fue inmediato.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop",
  },
  {
    name: "María Elena Espinoza",
    role: "Directora de Operaciones",
    company: "Distribuidora El Manantial",
    location: "Quito",
    content: "Gestionar 8 rutas diarias en papel era un dolor de cabeza diario. Con este software les asigno los viajes por la mañana y los repartidores solo siguen la secuencia en la app. Ahorramos muchísimo tiempo en logística.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&fit=crop",
  },
  {
    name: "Ing. Luis Cevallos",
    role: "Propietario",
    company: "Agua Purificada San Pedro",
    location: "Cuenca",
    content: "Lo que más me convenció fue el soporte local para Ecuador y que no te obligan a firmar contratos raros. Probé los 14 días gratis, vi que el cierre de caja cuadrado funcionaba y me quedé.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop",
  },
];