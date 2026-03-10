import Link from 'next/link';

export default function ServiceCard({ title, description, image, href }) {
  return (
    <div className="glass p-6 rounded-lg text-center flex flex-col items-center">
      <img src={image} alt={title} className="w-24 h-24 mb-4" />
      <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={href}>
        <a className="mt-auto px-4 py-2 bg-secondary rounded-full font-bold hover:opacity-90 transition">
          View Details
        </a>
      </Link>
    </div>
  );
}
