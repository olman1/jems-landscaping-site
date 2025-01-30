"use client";

import { DefaultSeo } from "next-seo";

export default function SEO() {
  return (
    <DefaultSeo
      title="Jems Landscaping LLC - Professional Landscaping Services"
      description="Jems Landscaping LLC provides expert lawn care, seasonal cleanups, tree & shrub care, and garden design services."
      openGraph={{
        type: "website",
        locale: "en_US",
        url: "https://www.jemslandscaping.com",
        site_name: "Jems Landscaping LLC",
        title: "Jems Landscaping LLC - Landscaping & Lawn Care Experts",
        description:
          "Transform your outdoor space with expert landscaping services in Long Island, NY.",
        images: [
          {
            url: "https://www.jemslandscaping.com/hero-bg.jpg",
            width: 1200,
            height: 630,
            alt: "Jems Landscaping - Beautiful Garden Design",
          },
        ],
      }}
      twitter={{
        handle: "@jemslandscaping",
        site: "@jemslandscaping",
        cardType: "summary_large_image",
      }}
    />
  );
}
