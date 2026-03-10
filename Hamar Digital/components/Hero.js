import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        {/* Left side text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-4">
            Grow Your Business With Smart Digital Marketing
          </h1>
          <p className="text-lg mb-6">
            We help businesses grow online through Social Media Marketing, Influencer Marketing, SEO
            Optimization and Strategic Digital Campaigns.
          </p>
          <div className="space-x-4">
            <Link href="#services">
              <a className="px-6 py-3 bg-secondary text-black font-bold rounded-full hover:opacity-90 transition">
                Start Your Growth
              </a>
            </Link>
            <Link href="#portfolio">
              <a className="px-6 py-3 border border-secondary rounded-full hover:bg-secondary hover:text-black transition">
                View Portfolio
              </a>
            </Link>
          </div>
        </div>
        {/* Right side illustration */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src="/illustrations/social_media_marketing.svg"
            alt="Social media marketing illustration"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
