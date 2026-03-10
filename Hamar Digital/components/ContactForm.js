import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setStatus('success');
      setForm({ name: '', business: '', phone: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <div>
        <label className="block">Name</label>
        <input name="name" value={form.name} onChange={handleChange} required className="w-full p-2 rounded" />
      </div>
      <div>
        <label className="block">Business Name</label>
        <input name="business" value={form.business} onChange={handleChange} required className="w-full p-2 rounded" />
      </div>
      <div>
        <label className="block">Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} required className="w-full p-2 rounded" />
      </div>
      <div>
        <label className="block">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full p-2 rounded" />
      </div>
      <div>
        <label className="block">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required className="w-full p-2 rounded" />
      </div>
      <button type="submit" className="px-6 py-2 bg-secondary rounded-full font-bold">
        Submit
      </button>
      {status === 'sending' && <p>Sending...</p>}
      {status === 'success' && <p>Thank you for contacting us!</p>}
      {status === 'error' && <p>Something went wrong.</p>}
    </form>
  );
}
