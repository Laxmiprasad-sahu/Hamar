'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiPlay, FiStar, FiSend, FiCheck } from 'react-icons/fi'
import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa'

// Hero Section
function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 bg-shapes">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary font-medium text-sm">Premium Digital Marketing</span>
            </motion.div>

            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight">
              Grow Your Business With{' '}
              <span className="gradient-text">Smart Digital</span>{' '}
              Marketing
            </h1>

            <p className="text-xl text-white/70 max-w-xl">
              We help businesses grow online through Social Media Marketing, Influencer Marketing, 
              SEO Optimization and Strategic Digital Campaigns.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Growth
                <FiArrowRight />
              </a>
              <a href="#portfolio" className="btn-secondary inline-flex items-center gap-2">
                <FiPlay className="text-sm" />
                View Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <h3 className="text-4xl font-bold gradient-text">500+</h3>
                <p className="text-white/50">Clients Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold gradient-text">50+</h3>
                <p className="text-white/50">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold gradient-text">5+</h3>
                <p className="text-white/50">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary-light rounded-3xl shadow-glow-purple" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center shadow-lg"
              >
                <FaInstagram className="text-4xl text-primary-dark" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center"
              >
                <FaYoutube className="text-3xl text-red-500" />
              </motion.div>

              {/* Content in Hero Image */}
              <div className="absolute inset-8 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center mb-6">
                  <span className="text-6xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Social Media</h3>
                <p className="text-white/70">Marketing Experts</p>
                <div className="flex gap-2 mt-6">
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm">Instagram</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm">Facebook</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm">YouTube</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="section-padding bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">About Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-2">
            About <span className="gradient-text">Hamar Digital</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-white/70 leading-relaxed">
              Hamar Digital is a creative digital marketing agency dedicated to helping businesses 
              grow in the digital world through innovative marketing strategies, high-quality 
              content creation, and data-driven campaigns.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              We specialize in social media growth, influencer marketing, search engine optimization 
              and professional digital branding. Our team of experts works tirelessly to deliver 
              results that exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['Social Media Growth', 'Influencer Marketing', 'SEO', 'Brand Strategy'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FiCheck className="text-secondary" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold">Your Growth</h3>
                <p className="text-white/60 mt-2">Our Priority</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Our Story Section
function OurStory() {
  const timeline = [
    {
      year: 'Starting',
      title: 'Helping Local Businesses',
      description: 'We began by helping local businesses establish their digital presence.',
    },
    {
      year: 'Focus',
      title: 'Creative Marketing',
      description: 'We focused on creative marketing strategies that actually work.',
    },
    {
      year: 'Mission',
      title: 'Affordable Solutions',
      description: 'Making professional digital marketing accessible to everyone.',
    },
    {
      year: 'Now',
      title: 'Growing Brands',
      description: 'Helping brands grow through exceptional content and strategy.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-black to-primary-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">Our Journey</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-2">
            Our <span className="gradient-text">Story</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary-light to-secondary transform -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass-card rounded-2xl p-6 inline-block">
                    <span className="text-secondary font-bold text-sm">{item.year}</span>
                    <h3 className="font-heading text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-white/60 mt-2">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-secondary shadow-glow absolute left-1/2 transform -translate-x-1/2" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'We help brands grow on platforms like Instagram, Facebook and YouTube through engaging content, strategic campaigns and audience targeting.',
      link: '/services/social-media',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'We improve your website ranking on Google through keyword research, content optimization, technical SEO and backlink strategies.',
      link: '/services/seo',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🎬',
      title: 'Video Production',
      description: 'We create high-quality promotional videos, reels and brand storytelling content that captures attention and converts viewers into customers.',
      link: '/services/video-production',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: '📊',
      title: 'Social Media Management',
      description: 'We manage your social media accounts professionally by planning content, scheduling posts, analyzing performance and engaging with your audience.',
      link: '/services/social-management',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="services" className="section-padding bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">What We Offer</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-2">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card-glow"
            >
              <div className="glass-card rounded-3xl p-8 h-full card-hover">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl mb-6`}>
                  {service.icon}
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>
                <a href={service.link} className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-4 transition-all">
                  View Details <FiArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Portfolio Section
function Portfolio() {
  const projects = [
    {
      name: 'Fashion Brand Campaign',
      client: 'Style Hub',
      category: 'Reels',
      image: '👗',
      reelLink: 'https://instagram.com/reel/example1',
    },
    {
      name: 'Restaurant Launch',
      client: 'Taste Bites',
      category: 'Promo Video',
      image: '🍕',
      reelLink: 'https://instagram.com/reel/example2',
    },
    {
      name: 'Fitness App Promo',
      client: 'FitLife',
      category: 'Social Media',
      image: '💪',
      reelLink: 'https://instagram.com/reel/example3',
    },
    {
      name: 'Beauty Brand Launch',
      client: 'Glow Beauty',
      category: 'Influencer',
      image: '💄',
      reelLink: 'https://instagram.com/reel/example4',
    },
    {
      name: 'Tech Product Launch',
      client: 'TechGear',
      category: 'Marketing',
      image: '📱',
      reelLink: 'https://instagram.com/reel/example5',
    },
    {
      name: 'Travel Agency Promo',
      client: 'Wanderlust',
      category: 'Video',
      image: '✈️',
      reelLink: 'https://instagram.com/reel/example6',
    },
  ]

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-black to-primary-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">Our Work</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-2">
            Recent <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden card-hover">
                <div className="aspect-video bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center relative">
                  <span className="text-6xl">{project.image}</span>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={project.reelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary-dark text-2xl hover:scale-110 transition-transform"
                    >
                      <FiPlay />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-secondary text-sm font-medium">{project.category}</span>
                  <h3 className="font-heading text-xl font-semibold mt-1">{project.name}</h3>
                  <p className="text-white/50 text-sm mt-1">{project.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Reviews Section
function Reviews() {
  const reviews = [
    {
      name: 'Rahul Sharma',
      business: 'Style Hub Fashion',
      rating: 5,
      text: 'Hamar Digital transformed our social media presence. Our follower count increased by 300% in just 3 months!',
    },
    {
      name: 'Priya Patel',
      business: 'Taste Bites Restaurant',
      rating: 5,
      text: 'Professional team with amazing creativity. Our restaurant went viral after their campaign.',
    },
    {
      name: 'Amit Kumar',
      business: 'FitLife App',
      rating: 5,
      text: 'Best investment we made for our brand. The video content quality is outstanding.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">Testimonials</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-2">
            Client <span className="gradient-text">Reviews</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-3xl p-8 lg:p-12 text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <FiStar key={i} className="text-secondary fill-secondary" />
              ))}
            </div>
            <p className="text-xl lg:text-2xl text-white/80 italic mb-8">"{reviews[activeIndex].text}"</p>
            <div>
              <h4 className="font-heading text-xl font-semibold">{reviews[activeIndex].name}</h4>
              <p className="text-white/50">{reviews[activeIndex].business}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`testimonial-dot ${index === activeIndex ? 'active' : 'inactive'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹9,000',
      videos: '10 Videos',
      features: ['10 Social Media Videos', 'Basic Editing', 'Music & Graphics', '2 Revisions'],
      featured: false,
    },
    {
      name: 'Growth',
      price: '₹13,000',
      videos: '15 Videos',
      features: ['15 Social Media Videos', 'Premium Editing', 'Music & Graphics', '3 Revisions', 'Thumbnail Design'],
      featured: true,
    },
    {
      name: 'Pro',
      price: '₹15,000',
      videos: '20 Videos',
      features: ['20 Social Media Videos', 'Premium Editing', 'Music & Graphics', 'Unlimited Revisions', 'Thumbnail Design', 'Brand Templates'],
      featured: false,
    },
    {
      name: 'Premium',
      price: '₹20,000',
      videos: '30 Videos',
      features: ['30 Social Media Videos', 'Premium Editing', 'Music & Graphics', 'Unlimited Revisions', 'Thumbnail Design', 'Brand Templates', 'Priority Support'],
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-black to-primary-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">Pricing Plans</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-2">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`pricing-card ${plan.featured ? 'featured' : ''} glass-card rounded-3xl p-8`}
            >
              {plan.featured && <span className="pricing-badge">Popular</span>}
              <h3 className="font-heading text-2xl font-semibold">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-white/50 ml-2">/month</span>
              </div>
              <p className="text-secondary font-medium mb-6">{plan.videos}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70">
                    <FiCheck className="text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-4 rounded-full font-semibold transition-all ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', business: '', phone: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">Get In Touch</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-2">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-heading text-2xl font-semibold mb-6">Let's Start Growing Your Business</h3>
              <p className="text-white/60 mb-8">
                Ready to take your business to the next level? Contact us today for a free consultation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <FaWhatsapp className="text-secondary text-xl" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Call / WhatsApp</p>
                    <a href="tel:9406031522" className="text-lg font-semibold">9406031522</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary">✉️</span>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Email</p>
                    <a href="mailto:Digitalhamar@gmail.com" className="text-lg font-semibold">Digitalhamar@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <FaInstagram className="text-secondary text-xl" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Social Media</p>
                    <p className="text-lg font-semibold">@hamardigital</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-2">Business Name</label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Your business"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/70 mb-2">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary inline-flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <OurStory />
      <Services />
      <Portfolio />
      <Reviews />
      <Pricing />
      <Contact />
    </div>
  )
}
