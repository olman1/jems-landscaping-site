"use client"; // ✅ Ensure this is the first line

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Link from "next/link";

const portfolioImages = [
  { src: "/portfolio1.jpg", alt: "Modern Garden Design" },
  { src: "/portfolio2.jpg", alt: "Beautiful Backyard Landscaping" },
  { src: "/portfolio3.jpg", alt: "Patio with Fire Pit" },
  { src: "/portfolio4.jpg", alt: "Lush Green Lawn" },
  { src: "/portfolio5.jpg", alt: "Walkway with Flowers" },
  { src: "/portfolio6.jpg", alt: "Hardscaping & Outdoor Lighting" },
];

export default function PortfolioPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">Our Landscaping Projects</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Explore some of our finest landscaping and hardscaping projects.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto">
        {portfolioImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:shadow-xl"
            onClick={() => {
              setCurrentIndex(index);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-72 object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          slides={portfolioImages}
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          plugins={[Thumbnails]}
        />
      )}

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 text-center bg-white shadow-lg p-10 rounded-lg max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-green-700">Love What You See?</h3>
        <p className="mt-2 text-lg text-gray-700">
          Let us bring your dream outdoor space to life! Contact us today for a free estimate.
        </p>
        <Link href="/book-now">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition">
            Get a Free Estimate
          </button>
        </Link>
      </motion.div>
    </main>
  );
}
