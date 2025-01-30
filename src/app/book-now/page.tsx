"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", date: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-4xl font-bold text-green-700"
      >
        Book a Landscaping Service
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }} 
        className="mt-4 text-lg text-gray-700"
      >
        Schedule an appointment with Jems Landscaping LLC.
      </motion.p>

      {/* Booking Form */}
      <div className="mt-10 max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        {submitted ? (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="text-green-600 text-lg"
          >
            ✅ Thank you! Your request has been submitted. We'll contact you soon.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg"
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your Phone Number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg"
            />
            <select 
              name="service" 
              value={formData.service} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg"
            >
              <option value="" disabled>Select a Service</option>
              <option value="Lawn Maintenance">Lawn Maintenance</option>
              <option value="Seasonal Cleanup">Seasonal Cleanup</option>
              <option value="Tree & Shrub Care">Tree & Shrub Care</option>
              <option value="Garden Design">Garden Design</option>
            </select>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg"
            />
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Book Now
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
