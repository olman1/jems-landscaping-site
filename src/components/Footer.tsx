"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Jems Landscaping LLC</h2>
          <p className="mt-2 text-sm text-gray-400">
            Transforming outdoor spaces with expert landscaping services.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="text-gray-400 hover:text-white transition" size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="text-gray-400 hover:text-white transition" size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="text-gray-400 hover:text-white transition" size={24} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/book-now" className="hover:text-white transition">
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-green-500" />
              <Link href="tel:6314158953" className="hover:text-white transition">
                (631) 415-8953
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-green-500" />
              <Link href="mailto:jemslandscaping@gmail.com" className="hover:text-white transition">
                jemslandscaping@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-green-500" />
              <span>Serving Long Island, NY</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jems Landscaping LLC. All rights reserved.
      </div>
    </footer>
  );
}
