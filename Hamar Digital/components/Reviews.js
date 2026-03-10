import { useState } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Alice',
    business: 'Tech Co',
    text: 'Great service! Highly recommend.',
    rating: 5
  },
  {
    name: 'Bob',
    business: 'Shop LLC',
    text: 'Our growth skyrocketed.',
    rating: 5
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-heading font-bold mb-8">Client Reviews</h2>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="glass p-8 mx-auto max-w-xl rounded-lg"
        >
          <p className="mb-4">"{review.text}"</p>
          <p className="font-bold">{review.name}</p>
          <p className="text-sm mb-2">{review.business}</p>
          <div>
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </div>
        </motion.div>
        <div className="mt-4 space-x-4">
          <button onClick={prev} className="px-4 py-2 bg-secondary rounded-full">
            Prev
          </button>
          <button onClick={next} className="px-4 py-2 bg-secondary rounded-full">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
