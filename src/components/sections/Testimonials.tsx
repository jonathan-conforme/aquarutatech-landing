// src/sections/Testimonials.tsx
import React from 'react';
import Container from "@/components/ui/Container";
import { Star } from "lucide-react";
import { testimonials } from "../../../data/testimonials";
export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-24 border-t border-slate-100">
      <Container>
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Con la confianza de distribuidoras locales
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Descubre cómo dueños de plantas purificadoras y flotas de reparto en Ecuador han tomado el control total de sus negocios con AquaRuta.
          </p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index} 
              className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Estrellas de calificación */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Comentario */}
                <p className="mt-4 text-sm leading-7 text-slate-600 italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Información del Cliente */}
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200/60 pt-4">
               
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {testimonial.role} en <span className="text-blue-600 font-medium">{testimonial.company}</span> ({testimonial.location})
                  </p>
                </div>
              </div>

            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}