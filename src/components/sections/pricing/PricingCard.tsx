import React from 'react';
import Button from "@/components/ui/Button";
import { Check, X } from "lucide-react";
import { Plan } from "./types";

interface Props {
  plan: Plan;
  isAnnual?: boolean;
}

export default function PricingCard({ plan, isAnnual }: Props) {
  const Icon = plan.icon;
  
  // Selecciona el precio correspondiente
  const currentPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;
  const periodText = isAnnual ? "USD / al año" : "USD / al mes";

  // --- CONSTRUCCIÓN DEL ENLACE DE WHATSAPP DINÁMICO ---
  const WHATSAPP_NUMBER = "593980659712"; 
  const planName = plan.name;
  const planPeriod = isAnnual ? "Anual" : "Mensual";
  
  // Texto personalizado que detalla el plan, período y precio
  const textMessage = `Hola, me interesa adquirir el *Plan ${planName}* en su modalidad *${planPeriod}* por $${currentPrice} ${isAnnual ? 'al año' : 'al mes'}. Me gustaría recibir más información para activarlo.`;
  
  // Codificamos el mensaje para que sea válido dentro de una URL
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textMessage)}`;

  return (
    <article
      className={`
        relative
        flex
        flex-col
        justify-between
        rounded-[24px]
        border
        bg-white
        p-8
        transition-all
        duration-300
        ${
          plan.popular
            ? "border-blue-600 shadow-md md:scale-105 z-10"
            : "border-slate-200"
        }
      `}
    >
      {/* Badge en la parte superior derecha de la tarjeta */}
      {plan.badge && (
        <span className="absolute right-6 top-6 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {plan.badge}
        </span>
      )}

      <div>
        {/* Nombre, descripción e Icono */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {plan.name}
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-snug min-h-[40px]">
              {plan.description}
            </p>
          </div>
          {Icon && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-blue-600">
              <Icon size={24} />
            </div>
          )}
        </div>

        {/* Precio Dinámico */}
        <div className="mt-6 flex items-baseline gap-1.5 text-slate-900">
          <span className="text-4xl font-extrabold tracking-tight">
            ${currentPrice}
          </span>
          <span className="text-sm font-medium text-slate-400">
            {periodText}
          </span>
        </div>

        {/* Botón de Acción con Redirección Personalizada */}
        <div className="mt-6">
          <Button 
            className={`w-full py-2.5 rounded-xl font-medium transition-all duration-200 shadow-sm ${
              plan.popular 
                ? "bg-blue-600 text-white hover:bg-blue-800" 
                : "border border-slate-200 text-black hover:bg-slate-500"
            }`}
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center"
            >
              Comprar plan
            </a>
          </Button>
        </div>

        {/* Límites Cuantificables */}
        <ul className="mt-8 space-y-4">
          <li className="flex items-center gap-3 text-sm text-slate-600">
            <Check size={16} className="text-blue-600 shrink-0" />
            <span>
              {typeof plan.limits.users === "number" 
                ? `${plan.limits.users} ${plan.limits.users === 1 ? 'usuario' : 'usuarios'} logueado(s)` 
                : plan.limits.users}
            </span>
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-600">
            <Check size={16} className="text-blue-600 shrink-0" />
            <span>
              {typeof plan.limits.employees === "number" ? `Hasta ${plan.limits.employees} empleados` : plan.limits.employees}
            </span>
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-600">
            <Check size={16} className="text-blue-600 shrink-0" />
            <span>
              {typeof plan.limits.clients === "number" ? `Hasta ${plan.limits.clients} clientes` : plan.limits.clients}
            </span>
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-600">
            <Check size={16} className="text-blue-600 shrink-0" />
            <span>
              {typeof plan.limits.routes === "number" ? `Hasta ${plan.limits.routes} rutas por día` : plan.limits.routes}
            </span>
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-600">
            <Check size={16} className="text-blue-600 shrink-0" />
            <span>
              {typeof plan.limits.products === "number" ? `Hasta ${plan.limits.products} productos` : plan.limits.products}
            </span>
          </li>
          
        </ul>

        {/* Línea Divisoria */}
        <div className="my-6 h-px bg-slate-100" />

        {/* Disponibilidad de Módulos */}
        <ul className="space-y-3.5">
          <FeatureItem enabled={plan.modules.routes} text="Gestión de rutas" />
          <FeatureItem enabled={plan.modules.inventory} text="Inventario de botellones" />
          <FeatureItem enabled={plan.modules.cash} text="Cierre de caja" />
          <FeatureItem enabled={plan.modules.purchases} text="Módulo de compras" />
          <FeatureItem enabled={plan.modules.payroll} text="Módulo de nómina" />
          <FeatureItem enabled={plan.modules.offline} text="Modo offline" />
          <FeatureItem enabled={plan.modules.electronic_invoicing} text="Facturación electrónica" />
        </ul>
      </div>
    </article>
  );
}

function FeatureItem({ enabled, text }: { enabled: boolean; text: string }) {
  return (
    <li className="flex items-center justify-between text-sm">
      <span className={enabled ? "text-slate-700" : "text-slate-400 line-through decoration-slate-100"}>
        {text}
      </span>
      {enabled ? (
        <Check size={16} className="text-blue-600 shrink-0" />
      ) : (
        <X size={16} className="text-slate-300 shrink-0" />
      )}
    </li>
  );
}