import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const heroImages = [
  {
    src:
      'https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern library with bookshelves',
    heading: 'Discover a World of Books',
    subheading: 'Swap, share, and explore with fellow readers',
    ctaText: 'Browse Now',
    ctaLink: '#',
  },
  {
    src:
      'https://images.unsplash.com/photo-1533327325824-76bc4e62d560?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Cozy reading nook',
    heading: 'Start Your Reading Journey',
    subheading: 'Join a vibrant community of book lovers',
    ctaText: 'Sign Up',
    ctaLink: '#',
  },
  {
    src:
      'https://images.unsplash.com/photo-1549503017-48c5ddd5a729?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Warm library reading room',
    heading: 'Connect Through Stories',
    subheading: 'Engage in passionate discussions and swaps',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
];

/**
 * HeroSection
 * -----------------
 * Props:
 *   tagline      – string (used by the Coming-Soon overlay)
 *   description  – string (used by the Coming-Soon overlay)
 */
const HeroSection = ({ tagline, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadState, setLoadState] = useState({}); // { 0: 'loading' | 'loaded' | 'error' }

  // ---------- Pre-load all images ----------
  useEffect(() => {
    heroImages.forEach((img, i) => {
      setLoadState((prev) => ({ ...prev, [i]: 'loading' }));
      const preImg = new window.Image();
      preImg.onload = () =>
        setLoadState((prev) => ({ ...prev, [i]: 'loaded' }));
      preImg.onerror = () =>
        setLoadState((prev) => ({ ...prev, [i]: 'error' }));
      preImg.src = img.src;
    });
  }, []);

  // ---------- Auto-rotate ----------
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = heroImages[currentIndex];
  const currentLoad = loadState[currentIndex];

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      {/* ---------- BACKGROUND IMAGE ---------- */}
      <div className="absolute inset-0">
        {currentLoad === 'loaded' ? (
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        ) : currentLoad === 'error' ? (
          <div
            className="w-full h-full"
            style={{
              background:
                'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 animate-pulse" />
        )}
      </div>

      {/* ---------- DARK OVERLAY ---------- */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* ---------- CONTENT ---------- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="bookish-glass bookish-shadow p-4 md:p-8 rounded-2xl max-w-xs md:max-w-3xl">
          <motion.h1
            key={current.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
            style={{ color: 'var(--primary)', fontFamily: 'Lora, serif' }}
          >
            {current.heading}
          </motion.h1>

          <motion.p
            key={current.subheading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6"
            style={{ color: 'var(--accent)', fontFamily: 'Open Sans, sans-serif' }}
          >
            {current.subheading}
          </motion.p>

          <motion.a
            href={current.ctaLink}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block bookish-button-enhanced text-white px-4 md:px-8 py-2 md:py-4 rounded-xl font-semibold text-sm md:text-lg"
            style={{
              fontFamily: 'Lora, serif',
              boxShadow: '0 4px 15px rgba(69, 106, 118, 0.3)',
            }}
          >
            {current.ctaText}
          </motion.a>
        </div>
      </div>

      {/* ---------- SLIDE INDICATORS ---------- */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? 'bg-[var(--accent)] scale-125'
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;