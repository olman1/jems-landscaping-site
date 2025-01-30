"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// ✅ Fix Lucide Icons Import
const Leaf = dynamic(() => import("lucide-react").then((mod) => mod.Leaf), { ssr: false });
const Trees = dynamic(() => import("lucide-react").then((mod) => mod.Trees), { ssr: false });
const Flower2 = dynamic(() => import("lucide-react").then((mod) => mod.Flower2), { ssr: false });
const Sprout = dynamic(() => import("lucide-react").then((mod) => mod.Sprout), { ssr: false });

export default function Home() {
  return (
    <main className="bg-white">
      {/* ✅ SEO Metadata - Optimized for Search Engines */}
      <NextSeo
        title="Jems Landscaping LLC | Professional Landscaping Services"
        description="Transform your outdoor space with expert landscaping services in Long Island, NY. We provide lawn care, tree trimming, garden design, and more!"
        canonical="https://www.jemslandscaping.com/"
        openGraph={{
          url: "https://www.jemslandscaping.com/",
          title: "Jems Landscaping LLC - Professional Landscaping Services",
          description: "Transform your outdoor space with expert landscaping services in Long Island, NY.",
          images: [
            {
              url: "https://www.jemslandscaping.com/hero-bg.jpg",
              width: 1200,
              height: 630,
              alt: "Beautiful Garden by Jems Landscaping",
            },
          ],
        }}
        twitter={{
          handle: "@jemslandscaping",
          site: "@jemslandscaping",
          cardType: "summary_large_image",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-gray-100">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-bg.jpg"
            alt="Landscaping Service"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-80"
            priority
            quality={85}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl text-white"
        >
          <h1 className="text-5xl font-bold">Transform Your Outdoor Space</h1>
          <p className="mt-4 text-lg">Professional landscaping services to enhance the beauty of your home.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-now">
              <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition">Get a Free Estimate</button>
            </Link>
            <Link href="/portfolio">
              <button className="px-6 py-3 border border-white text-white text-lg rounded-lg hover:bg-white hover:text-green-700 transition">View Our Work</button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700">Our Services</h2>
          <p className="mt-4 text-lg text-gray-700">We provide a wide range of professional landscaping services.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {[
              { icon: <Sprout size={48} className="text-green-600" />, title: "Lawn Maintenance", description: "Regular mowing, fertilization, and aeration." },
              { icon: <Leaf size={48} className="text-green-600" />, title: "Seasonal Cleanup", description: "Spring & Fall cleanups to refresh your yard." },
              { icon: <Trees size={48} className="text-green-600" />, title: "Tree & Shrub Care", description: "Trimming, pruning, and disease prevention." },
              { icon: <Flower2 size={48} className="text-green-600" />, title: "Garden Design", description: "Beautiful landscapes tailored to your home." },
            ].map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="bg-white shadow-lg p-8 rounded-lg text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-700">Our Work</h2>
          <p className="mt-4 text-lg text-gray-700">Check out some of our recent landscaping projects.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {["portfolio1.jpg", "portfolio2.jpg", "portfolio3.jpg"].map((img, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/portfolio/${img}`}
                  alt="Portfolio Project"
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
