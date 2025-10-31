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
 * Clean hero section for coming soon page
 */
const HeroSection = () => {
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
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-3 sm:px-4">
        <div className="bookish-glass bookish-shadow p-4 sm:p-6 md:p-10 rounded-xl md:rounded-2xl w-full max-w-xs sm:max-w-lg md:max-w-4xl">
          <motion.h1
            key={current.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-5"
            style={{ color: 'var(--primary)', fontFamily: 'Lora, serif' }}
          >
            Welcome to BookSwaps
          </motion.h1>

          <motion.p
            key={current.subheading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--accent)', fontFamily: 'Open Sans, sans-serif' }}
          >
            The platform for book lovers to connect, share, and discover their next great read
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => {
              const email = prompt('Enter your email to get notified when we launch:');
              if (email) {
                alert('Thank you! We\'ll notify you at ' + email);
              }
            }}
            className="inline-block bookish-button-enhanced text-white px-5 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:scale-105 transition-transform"
            style={{
              fontFamily: 'Lora, serif',
              boxShadow: '0 4px 15px rgba(69, 106, 118, 0.3)',
            }}
          >
            Notify Me at Launch
          </motion.button>
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