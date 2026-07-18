// app/caracteristicas/page.tsx
import type { Metadata } from "next";
import React from 'react';
import Header from '@/components/layout/Header';
import Features from "@/components/sections/Features";
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <main>
        <Header />
      <Features />
    <Footer />
    </main>
  );
}