"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Icono oficial de WhatsApp en formato SVG
function WhatsAppIcon({ className, size = 24 }: { className?: string; size?: number }) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            className={className}
            fill="currentColor"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.704 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

export default function WhatsappFloating() {
    const [showBubble, setShowBubble] = useState(false);
    const [showButton, setShowButton] = useState(true);
    // 1. Nuevo estado para recordar si el usuario la cerró manualmente
    const [hasClosedManually, setHasClosedManually] = useState(false);

    useEffect(() => {
        // Si el usuario ya la cerró, no activamos ningún trigger automático
        if (hasClosedManually) return;

        const timer = setTimeout(() => {
            setShowBubble(true);
            setShowButton(false);
        }, 10000);

        const handleScroll = () => {
            const scroll =
                window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight);

            if (scroll >= 0.3) {
                setShowBubble(true);
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasClosedManually]); // 2. Agregamos el estado a las dependencias para refrescar el efecto

    const phone = "593980659712";
    const message = "Hola 👋, quiero conocer más sobre AquaRuta y la prueba gratuita.";
    const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">

            {showBubble && (
                <div className="mb-4 w-80 rounded-2xl border border-gray-200 bg-white shadow-2xl">

                    <div className="flex items-center justify-between rounded-t-2xl bg-[#25D366] px-4 py-3">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center">
                                <WhatsAppIcon className="text-white" size={24} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-white">
                                    Soporte AquaRuta
                                </h3>
                                <p className="text-xs text-green-100">
                                    Normalmente respondemos en menos de 10 minutos
                                </p>
                            </div>

                        </div>

                        <button
                            onClick={() => {
                                setShowBubble(false);
                                setShowButton(true);
                                // 3. Marcamos que el usuario cerró la ventana a propósito
                                setHasClosedManually(true);
                            }}
                            className="text-white hover:opacity-80"
                        >
                            <X size={18} />
                        </button>

                    </div>

                    <div className="p-4">

                        <div className="rounded-xl bg-gray-100 p-3 text-sm text-gray-700">
                            👋 ¡Hola!
                            <br /><br />
                            Soy parte del equipo de AquaRuta.
                            <br /><br />
                            ¿Te gustaría conocer cómo controlar clientes, rutas, inventario y ventas desde una sola plataforma?
                        </div>

                        <a
                            href={whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] font-medium text-white transition hover:bg-[#1ebe5d]"
                        >
                            <WhatsAppIcon size={18} />
                            Hablar por WhatsApp
                        </a>

                    </div>

                </div>
            )}

            {showButton && (
                <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
                >
                    <WhatsAppIcon size={32} />
                </a>
            )}

        </div>
    );
}
