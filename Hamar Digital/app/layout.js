import './globals.css'
import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Hamar Digital | Premium Digital Marketing Agency',
  description: 'Grow Your Business With Smart Digital Marketing. We help businesses grow online through Social Media Marketing, Influencer Marketing, SEO Optimization and Strategic Digital Campaigns.',
  keywords: 'digital marketing, social media marketing, SEO, video production, influencer marketing, branding',
  openGraph: {
    title: 'Hamar Digital | Premium Digital Marketing Agency',
    description: 'Grow Your Business With Smart Digital Marketing',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
