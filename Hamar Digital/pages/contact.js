import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-primaryStart bg-gradient-to-b to-primaryEnd text-white">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Get in Touch</h1>
          <p className="mb-6">Fill out the form and we'll get back to you soon.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
