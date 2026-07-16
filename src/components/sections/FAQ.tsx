// src/components/sections/FAQ.tsx
'use client';

import React, { useState } from 'react';
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { faqData, FAQItem } from "../../../data/faq";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-24 border-t border-slate-100">
      <Container>
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <SectionTitle
                    badge="Soporte"
                    title="Preguntas frecuentes"
                    description=" ¿Tienes dudas sobre cómo AquaRuta puede ayudarte a controlar tu planta de agua? Aquí tienes las respuestas a las preguntas más comunes."
                  />
          
        </div>

        {/* Lista de Acordeones */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FAQRow key={index} item={item} />
          ))}
        </div>

      </Container>
    </section>
  );
}

// Componente fila individual del acordeón
function FAQRow({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200/60 bg-white transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-base font-semibold text-slate-900 pr-4">
          {item.question}
        </h3>
        <ChevronDown
          size={18}
          className={`text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      {/* Contenedor colapsable con animación CSS nativa */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-6 pt-0 text-sm leading-7 text-slate-600 border-t border-slate-50">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}