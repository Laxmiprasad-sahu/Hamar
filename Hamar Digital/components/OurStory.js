export default function OurStory() {
  const timeline = [
    { year: '2018', text: 'Started by helping local businesses' },
    { year: '2019', text: 'Focused on creative marketing' },
    { year: '2020', text: 'Provided affordable digital solutions' },
    { year: '2021', text: 'Growing brands through content' }
  ];

  return (
    <section id="story" className="py-20 bg-opacity-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-8">Our Story</h2>
        <div className="relative border-l-2 border-secondary ml-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="mb-8 ml-4">
              <div className="absolute -left-6 w-4 h-4 bg-secondary rounded-full" />
              <p className="text-lg font-bold">{item.year}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
