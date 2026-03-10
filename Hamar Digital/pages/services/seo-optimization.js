import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function SeoPage() {
  return (
    <div>
      <Navbar />
      <header className="min-h-screen flex items-center justify-center bg-primaryStart bg-gradient-to-b to-primaryEnd text-white">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">SEO Optimization</h1>
          <p className="mb-6">
            We improve your website ranking on Google through keyword research, content optimization,
            technical SEO and backlink strategies.
          </p>
        </div>
      </header>
      <main className="py-20 container mx-auto px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">SEO Strategy</h2>
          <p>
            Our approach begins with a comprehensive audit, then we craft content and optimize
            technical factors to boost visibility.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Keyword Research</h2>
          <p>We identify high-value keywords that your customers are searching for.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Google Ranking Improvement</h2>
          <p>
            Tracking rankings and iterating on content ensures continuous climb on search engine
            results pages.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Analytics Tracking</h2>
          <p>
            We set up tools like Google Analytics and Search Console to measure performance and
            refine campaigns.
          </p>
        </section>
      </main>
      {/* contact call-to-action section */}
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
