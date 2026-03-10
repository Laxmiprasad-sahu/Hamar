import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import OurStory from '../components/OurStory';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamar Digital - Creative Digital Marketing Agency</title>
        <meta name="description" content="Grow Your Business With Smart Digital Marketing" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <OurStory />
      <Services />
      <Portfolio />
      <Reviews />
      <Pricing />
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Contact</h2>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
