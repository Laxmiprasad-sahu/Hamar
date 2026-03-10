import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function VideoProductionPage() {
  return (
    <div>
      <Navbar />
      <header className="min-h-screen flex items-center justify-center bg-primaryStart bg-gradient-to-b to-primaryEnd text-white">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Video Production</h1>
          <p className="mb-6">
            We create high-quality promotional videos, reels and brand storytelling content that
            captures attention and converts viewers into customers.
          </p>
        </div>
      </header>
      <main className="py-20 container mx-auto px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Services</h2>
          <ul className="list-disc ml-6">
            <li>Shooting</li>
            <li>Editing</li>
            <li>Reels creation</li>
            <li>Business promotional videos</li>
          </ul>
        </section>
      </main>
      <section className="bg-opacity-20 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Start Growing Your Business Today</h2>
          <p className="mb-6">Call or WhatsApp 9406031522</p>
          <p className="mb-6">Email Digitalhamar@gmail.com</p>
          <p className="mb-6">Social Media @hamardigital • Promotional Page @cgroww</p>
          <div className="space-x-4">
            <Link href="/contact">
              <a className="px-6 py-3 bg-secondary rounded-full font-bold hover:opacity-90 transition">
                Contact Us
              </a>
            </Link>
            <a
              href="https://wa.me/919406031522"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-secondary rounded-full font-bold hover:bg-secondary hover:text-black transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
