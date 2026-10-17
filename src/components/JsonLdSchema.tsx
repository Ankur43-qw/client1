import { BUSINESS_CONFIG } from "@/config/business";

export default function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "LegalService", "ProfessionalService"],
        "@id": `${BUSINESS_CONFIG.siteUrl}/#localbusiness`,
        "name": BUSINESS_CONFIG.name,
        "alternateName": BUSINESS_CONFIG.marathiSubtitle,
        "description": "20+ Years experienced Property Documentation, Kharedi Khat (खरेदीखत), CIDCO Property Transfer, Registered Rent Agreement (भाडेकरार), Notary, Affidavit, Marathi & English Typing, and Xerox Center in Lekha Nagar, CIDCO Nashik 422009.",
        "url": BUSINESS_CONFIG.siteUrl,
        "telephone": BUSINESS_CONFIG.phoneTel,
        "priceRange": "₹₹",
        "image": `${BUSINESS_CONFIG.siteUrl}/og-image.jpg`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS_CONFIG.address.street,
          "addressLocality": BUSINESS_CONFIG.address.city,
          "addressRegion": BUSINESS_CONFIG.address.state,
          "postalCode": BUSINESS_CONFIG.address.pincode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": BUSINESS_CONFIG.geo.latitude,
          "longitude": BUSINESS_CONFIG.geo.longitude
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:30"
          }
        ],
        "areaServed": BUSINESS_CONFIG.areasServed.map((area) => ({
          "@type": "AdministrativeArea",
          "name": `${area}, Nashik`
        })),
        "sameAs": [
          BUSINESS_CONFIG.googleMapsShareUrl
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Documentation & Typing Xerox Services",
          "itemListElement": BUSINESS_CONFIG.services.map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "alternateName": service.marathiTitle,
              "description": service.longDesc,
              "serviceType": service.categoryName,
              "provider": {
                "@type": "LocalBusiness",
                "name": BUSINESS_CONFIG.name
              }
            }
          }))
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
