'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const whatsappLink = "https://wa.me/919406031522"

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="text-white text-3xl" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
        <span className="relative text-[10px] font-bold text-primary-dark">2</span>
      </span>
    </motion.a>
  )
}
