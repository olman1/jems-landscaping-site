"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

// Define Zod Schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

// Define TypeScript type based on Zod schema
type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">Get in Touch</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Have questions? Need a quote? We're here to help! Contact us today.
        </p>
      </motion.div>

      {/* Contact Information */}
      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-6 rounded-lg shadow-lg">
          <Phone className="text-green-600 mx-auto" size={40} />
          <h3 className="text-xl font-semibold mt-3">Call Us</h3>
          <p className="mt-1 text-gray-600">
            <Link href="tel:6314158953" className="text-green-600 hover:underline">631-415-8953</Link>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-white p-6 rounded-lg shadow-lg">
          <Mail className="text-green-600 mx-auto" size={40} />
          <h3 className="text-xl font-semibold mt-3">Email Us</h3>
          <p className="mt-1 text-gray-600">
            <Link href="mailto:jemslandscaping@gmail.com" className="text-green-600 hover:underline">jemslandscaping@gmail.com</Link>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="bg-white p-6 rounded-lg shadow-lg">
          <MapPin className="text-green-600 mx-auto" size={40} />
          <h3 className="text-xl font-semibold mt-3">Our Location</h3>
          <p className="mt-1 text-gray-600">Serving Long Island, NY</p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        {submitted ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-green-600 text-lg text-center">
            ✅ Thank you! We'll get back to you soon.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className="w-full p-3 border rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message?.toString()}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className="w-full p-3 border rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>}
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                {...register("message")}
                rows={4}
                className="w-full p-3 border rounded-lg"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message?.toString()}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      {/* Google Maps Embed */}
      <div className="mt-12 max-w-4xl mx-auto">
        <iframe
          className="w-full h-72 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.911178693186!2d-73.99646042409091!3d40.73061037139886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlMjAnNTMuNiJOIDczwrA1OSc0Mi45Ilc!5e0!3m2!1sen!2sus!4v1700000000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
