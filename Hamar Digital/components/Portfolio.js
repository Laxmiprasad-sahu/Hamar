export default function Portfolio() {
  // placeholder items
  const items = [
    { title: 'Campaign A', image: '/portfolio/a.jpg' },
    { title: 'Campaign B', image: '/portfolio/b.jpg' },
    { title: 'Campaign C', image: '/portfolio/c.jpg' }
  ];
  return (
    <section id="portfolio" className="py-20 bg-opacity-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="glass p-4 rounded-lg">
              <img src={it.image} alt={it.title} className="w-full h-40 object-cover rounded-md mb-2" />
              <h3 className="font-bold">{it.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
