import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

export function SEOHead({
  title = "PURIFLOW - Limpeza Industrial Especializada | Portugal",
  description = "Especialistas em limpeza de exaustores, filtros e motores industriais. 5+ anos de experiência, garantia até 8 meses. Atendimento em todo Portugal. Orçamento grátis!",
  keywords = "limpeza industrial, exaustores, filtros industriais, motores, limpeza Portugal, PURIFLOW, Gustavo Costa, manutenção industrial, limpeza especializada",
  url = "puriflow.pt",
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      property?: string
    ) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "PURIFLOW - Gustavo Costa");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", "Portuguese");

    // Geo Tags
    updateMetaTag("geo.region", "PT");
    updateMetaTag("geo.country", "Portugal");
    updateMetaTag("geo.placename", "Portugal");

    // Open Graph
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:site_name", "PURIFLOW", true);
    updateMetaTag("og:locale", "pt_PT", true);

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);

    // Business Info
    updateMetaTag("contact", "geral@puriflow.pt");
    updateMetaTag("phone", "+351929021881");

    // Mobile
    updateMetaTag("theme-color", "#0ea5e9");

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Structured Data
    let structuredDataScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredDataScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "PURIFLOW",
      description:
        "Especialistas em limpeza industrial de exaustores, filtros e motores industriais",
      url: url,
      telephone: "+351929021881",
      email: "geral@puriflow.pt",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PT",
        addressLocality: "Portugal",
      },
      founder: {
        "@type": "Person",
        name: "Gustavo Costa",
        jobTitle: "Fundador & Operador Especializado",
      },
      serviceArea: {
        "@type": "Country",
        name: "Portugal",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Limpeza Industrial",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Limpeza de Exaustores Industriais",
              description:
                "Limpeza especializada de sistemas de exaustão industriais",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Manutenção de Filtros",
              description:
                "Manutenção especializada de filtros de alta performance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Limpeza de Motores Industriais",
              description:
                "Limpeza completa de motores e equipamentos industriais",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "500",
      },
    };

    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, url]);

  return null; // Este componente não renderiza nada visualmente
}
