'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiInstagram, FiYoutube, FiArrowUp } from 'react-icons/fi'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Contact', href: '/#contact' },
]

const services = [
  { name: 'Social Media Marketing', href: '/services/social-media' },
  { name: 'SEO Optimization', href: '/services/seo' },
  { name: 'Video Production', href: '/services/video-production' },
  { name: 'Social Media Management', href: '/services/social-management' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-primary-dark to-black pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent-gold flex items-center justify-center">
                <span className="text-primary-dark font-bold text-2xl">H</span>
              </div>
              <span className="font-heading font-bold text-2xl">
                <span className="text-white">Hamar</span>
                <span className="text-secondary"> Digital</span>
              </span>
            </Link>
            <p className="text-white/70 font-body">
              We help businesses grow online through Social Media Marketing, Influencer Marketing, SEO Optimization and Strategic Digital Campaigns.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/hamardigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary-dark transition-all duration-300"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://youtube.com/@hamardigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary-dark transition-all duration-300"
              >
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FiPhone className="text-secondary" />
                </div>
                <a
                  href="tel:9406031522"
                  className="text-white/70 hover:text-secondary transition-colors duration-300"
                >
                  9406031522
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FiMail className="text-secondary" />
                </div>
                <a
                  href="mailto:Digitalhamar@gmail.com"
                  className="text-white/70 hover:text-secondary transition-colors duration-300"
                >
                  Digitalhamar@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FiInstagram className="text-secondary" />
                </div>
                <span className="text-white/70">@hamardigital</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Hamar Digital. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent-gold flex items-center justify-center text-primary-dark hover:shadow-glow transition-all duration-300"
          >
            <FiArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
