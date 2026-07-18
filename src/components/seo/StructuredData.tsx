export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://aquarutatech.com/#founder",
        name: "Jonathan Conforme",
        jobTitle: "Fundador y Director de Tecnología",
        worksFor: {
          "@id": "https://aquarutatech.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://aquarutatech.com/#organization",
        name: "AquaRutaTech",
        identifier: "0953832805001",
        url: "https://aquarutatech.com",
        logo: {
          "@type": "ImageObject",
          url: "https://aquarutatech.com/icons/icon-512x512.png",
        },
        founder: {
          "@id": "https://aquarutatech.com/#founder",
        },
        email: "soporte@aquarutatech.com",
        telephone: "+593980659712",
        description:
          "Software para distribuidoras de agua en Ecuador.",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://aquarutatech.com/#software",
        name: "AquaRutaTech",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://aquarutatech.com",
        creator: {
          "@id": "https://aquarutatech.com/#organization",
        },
        image: "https://aquarutatech.com/images/AquaRuta.png",
        description:
          "Software para administrar clientes, rutas, ventas, inventario, caja y empleados para distribuidoras de agua.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}