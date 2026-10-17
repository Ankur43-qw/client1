import { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: BUSINESS_CONFIG.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BUSINESS_CONFIG.siteUrl}/cidco-property-documentation-nashik`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BUSINESS_CONFIG.siteUrl}/kharedi-khat-rent-agreement-nashik`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BUSINESS_CONFIG.siteUrl}/typing-xerox-shop-lekha-nagar-nashik`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BUSINESS_CONFIG.siteUrl}/affidavit-notary-services-nashik`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  return routes;
}
