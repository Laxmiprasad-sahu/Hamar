'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck, FiBarChart2, FiUsers, FiTarget } from 'react-icons/fi'
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

export default function SocialMediaMarketing() {
  const benefits = [
    'Increased brand awareness',
    'Higher engagement rates',
    'Quality followers & audience',
    'Better ROI on ad spend',
    'Brand loyalty & trust',
    'Competitor analysis',
  ]

  const process = [
    {
      step: 1,
      title: 'Analysis',
      description: 'We analyze your current social media presence and competitors.',
    },
    {
      step: 2,
      title: 'Strategy',
      description: 'Create a customized content strategy aligned with your goals.',
    },
    {
      step: 3,
      title: 'Content',
      description: 'Create engaging content that resonates with your audience.',
    },
    {
      step: 4,
      title: 'Growth',
      description: 'Implement campaigns and track growth metrics.',
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="bg-shapes">
          <div className="bg-shape bg-shape-1" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium">Service</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mt-2">
                Social Media <span className="gradient-text">Marketing</span>
              </h1>
              <p className="text-xl text-white/70 mt-6">
                We help brands grow on platforms like Instagram, Facebook and YouTube through 
                engaging content, strategic campaigns and audience targeting.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started <FiArrowRight />
                </Link>
              </div>
              
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <FaInstagram className="text-pink-500 text-2xl" />
                  <span className="text-white/70">Instagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFacebook className="text-blue-500 text-2xl" />
                  <span className="text-white/70">Facebook</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaYoutube className="text-red-500 text-2xl" />
                  <span className="text-white/70">YouTube</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-12 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">📱</div>
                  <h3 className="text-2xl font-bold">Grow Your Social Presence</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-black to-primary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              Key <span className="gradient-text">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-4"
              >
                <FiCheck className="text-secondary text-xl" />
                <span className="text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-bold">{item.step}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-b from-primary-dark/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Start Growing Your Business Today
            </h2>
            <p className="text-white/60 mb-8">
              Ready to take your social media to the next level? Contact us now!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/50 text-sm mb-1">Call / WhatsApp</p>
                <a href="tel:9406031522" className="text-lg font-semibold">9406031522</a>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/50 text-sm mb-1">Email</p>
                <a href="mailto:Digitalhamar@gmail.com" className="text-lg font-semibold">Digitalhamar@gmail.com</a>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/50 text-sm mb-1">Social Media</p>
                <p className="text-lg font-semibold">@hamardigital</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href="https://wa.me/919406031522"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
