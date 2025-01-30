"use client";
import { motion } from "framer-motion";
import { Leaf, Trees, Flower2, Sprout, Ruler, Sun, Droplet, Landmark } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Ruler size={48} className="text-green-600" />,
    title: "Lawn Maintenance",
    description: "Ensure your lawn stays lush and green with regular mowing, fertilization, aeration, and weed control.",
  },
  {
    icon: <Leaf size={48} className="text-green-600" />,
    title: "Seasonal Cleanup",
    description: "Spring & Fall cleanups to remove leaves, debris, and keep your yard fresh for the changing seasons.",
  },
  {
    icon: <Trees size={48} className="text-green-600" />,
    title: "Tree & Shrub Care",
    description: "Expert trimming, pruning, and disease prevention to ensure your trees and shrubs stay healthy year-round.",
  },
  {
    icon: <Flower2 size={48} className="text-green-600" />,
    title: "Garden Design",
    description: "Custom-designed flower beds, plant arrangements, and hardscaping for a stunning outdoor aesthetic.",
  },
  {
    icon: <Landmark size={48} className="text-green-600" />,
    title: "Hardscaping",
    description: "Patios, walkways, retaining walls, and outdoor fireplaces that enhance functionality and beauty.",
  },
  {
    icon: <Sun size={48} className="text-green-600" />,
    title: "Outdoor Lighting",
    description: "Install energy-efficient lighting to enhance the ambiance and safety of your outdoor space.",
  },
  {
    icon: <Droplet size={48} className="text-green-600" />,
    title: "Irrigation Systems",
    description: "Automatic sprinkler systems to keep your landscape hydrated and healthy with minimal effort.",
  },
  {
    icon: <Sprout size={48} className="text-green-600" />,
    title: "Sod Installation",
    description: "Get a beautiful, instant lawn with professional sod installation tailored to your soil type.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">Our Professional Landscaping Services</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We offer a variety of expert landscaping services to enhance the beauty, functionality, and value of your outdoor space.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-8 rounded-lg text-center flex flex-col items-center transform transition duration-300 hover:shadow-xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-green-700">Ready to Transform Your Yard?</h3>
        <p className="mt-2 text-lg text-gray-700">Get a free consultation with our landscaping experts today.</p>
        <Link href="/book-now">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition">
            Book a Free Estimate
          </button>
        </Link>
      </motion.div>
    </main>
  );
}
