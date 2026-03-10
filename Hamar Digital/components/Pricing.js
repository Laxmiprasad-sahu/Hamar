export default function Pricing() {
  const plans = [
    { name: 'Starter', details: '10 Videos — ₹10000' },
    { name: 'Growth', details: '15 Videos — ₹13000' },
    { name: 'Pro', details: '20 Videos — ₹15000' },
    { name: 'Premium', details: '30 Videos — ₹21000' }
  ];

  return (
    <section id="pricing" className="py-20 bg-opacity-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-heading font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {plans.map((p, idx) => (
            <div key={idx} className="glass p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="mb-4">{p.details}</p>
              <button className="px-4 py-2 bg-secondary rounded-full font-bold">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
