import "@/styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import SEO from "@/components/SEO"; // ✅ Import new client component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jems Landscaping LLC" />

        {/* JSON-LD Schema Markup for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jems Landscaping LLC",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Long Island",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              telephone: "631-415-8953",
              url: "https://www.jemslandscaping.com",
              image: "https://www.jemslandscaping.com/hero-bg.jpg",
              description:
                "Expert landscaping services in Long Island. Lawn maintenance, tree care, and garden design.",
              openingHours: "Mo-Fr 08:00-18:00",
              priceRange: "$$",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.73061",
                longitude: "-73.935242",
              },
            }),
          }}
        />
      </Head>
      <body className="pt-20">
        <SEO /> {/* ✅ Add SEO component inside <body> to fix Hook error */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
