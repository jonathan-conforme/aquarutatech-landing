import {
  Rocket,
  Sparkles,
  Building2,
  Crown,
} from "lucide-react";
import { Plan } from "./types";

export const plans: Plan[] = [
  {
    name: "Básico",
    description: "Ideal para pequeños negocios que comienzan a digitalizar sus operaciones.",
    priceMonthly: 14.99,
    priceAnnual: 11.99, // Descuento anual equivalente ($143.88 al año)
    icon: Rocket,
    limits: {
      users: 1,
      employees: 3,
      clients: 200,
      products: 10,
      routes: 25,
    },
    modules: {
      routes: true,
      inventory: true,
      cash: true,
      purchases: true,
      payroll: false,
      offline: false,
      electronic_invoicing: false,
    },
  },
  {
    name: "Premium",
    badge: "Más vendido",
    popular: true,
    description: "La mejor opción para distribuidoras que están creciendo.",
    priceMonthly: 29.99,
    priceAnnual: 24.99, // Descuento anual equivalente ($299.88 al año)
    icon: Sparkles,
    limits: {
      users: 4,
      employees: 8,
      clients: 500,
      products: 20,
      routes: 50,
    },
    modules: {
      routes: true,
      inventory: true,
      cash: true,
      purchases: true,
      payroll: false,
      offline: false,
      electronic_invoicing: false,
    },
  },
  {
    name: "Empresarial",
    description: "Pensado para empresas con mayor volumen de clientes y operaciones.",
    priceMonthly: 49.99,
    priceAnnual: 39.99, // Descuento anual equivalente ($479.88 al año)
    icon: Building2,
    limits: {
      users: 10,
      employees: 15,
      clients: 800,
      products: "Ilimitados",
      routes: "Ilimitadas",
    },
    modules: {
      routes: true,
      inventory: true,
      cash: true,
      purchases: true,
      payroll: true,
      offline: false,
      electronic_invoicing: false,
    },
  },
  {
    name: "VIP",
    description: "Máximo rendimiento para distribuidoras con operaciones de gran escala.",
    priceMonthly: 99.99,
    priceAnnual: 79.99, // Descuento anual equivalente ($959.88 al año)
    icon: Crown,
    limits: {
      users: 15,
      employees: 25,
      clients: "Ilimitados",
      products: "Ilimitados",
      routes: "Ilimitadas",
      
      
    },
    modules: {
      routes: true,
      inventory: true,
      cash: true,
      purchases: true,
      payroll: true,
      offline: false,
      electronic_invoicing: false,
    },
  },
];