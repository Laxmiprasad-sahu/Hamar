import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      title: 'Social Media Marketing',
      description:
        'We help brands grow on platforms like Instagram, Facebook and YouTube through engaging content, strategic campaigns and audience targeting.',
      image: '/illustrations/social_media_marketing.svg',
      href: '/services/social-media-marketing'
    },
    {
      title: 'SEO Optimization',
      description:
        'We improve your website ranking on Google through keyword research, content optimization, technical SEO and backlink strategies.',
      image: '/illustrations/seo_ranking.svg',
      href: '/services/seo-optimization'
    },
    {
      title: 'Video Production',
      description:
        'We create high-quality promotional videos, reels and brand storytelling content that captures attention and converts viewers into customers.',
      image: '/illustrations/studio_production.svg',
      href: '/services/video-production'
    },
    {
      title: 'Social Media Management',
      description:
        'We manage your social media accounts professionally by planning content, scheduling posts, analyzing performance and engaging with your audience.',
      image: '/illustrations/social_growth.svg',
      href: '/services/social-media-management'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-8 text-center">Our Major Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
