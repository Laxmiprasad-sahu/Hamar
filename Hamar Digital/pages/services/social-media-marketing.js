import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function SocialMediaPage() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Social Media Marketing - Hamar Digital</title>
        <meta name="description" content="Grow your social media presence with strategic campaigns and engaging content." />
      </Head>
      <header className="min-h-screen flex items-center justify-center bg-primaryStart bg-gradient-to-b to-primaryEnd text-white">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Social Media Marketing</h1>
          <p className="mb-6">
            We help brands grow on platforms like Instagram, Facebook and YouTube through engaging
            content, strategic campaigns and audience targeting.
          </p>
        </div>
      </header>
      <main className="py-20 container mx-auto px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Benefits</h2>
          <ul className="list-disc ml-6">
            <li>Increased followers & engagement</li>
            <li>Targeted ad campaigns</li>
            <li>Brand awareness</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Example Strategy</h2>
          <p>
            We analyse your audience, create a content calendar with reels and stories, and run
            retargeting ads to convert visitors into customers.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Portfolio Examples</h2>
          {/* could reuse Portfolio component or custom cards */}
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
