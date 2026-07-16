import React from "react";

export interface Plan {
  name: string;
  badge?: string;
  description: string;
  priceMonthly: number; // Precio si se paga mes a mes
  priceAnnual: number;  // Precio mensual si se factura anualmente
  popular?: boolean;
  icon: React.ElementType;
  limits: {
    users: number | string;
    employees: number | string;
    clients: number | string;
    products: number | string;
    routes: number | string;
  };
  modules: {
    routes: boolean;
    inventory: boolean;
    cash: boolean;
    purchases: boolean;
    payroll: boolean;
  };
}