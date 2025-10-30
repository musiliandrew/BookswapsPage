import { useEffect, useState, useRef, useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import debounce from 'lodash/debounce';

import HeroSection from './HeroSection';
import LoginCTA from './LoginCTA';
import SignupCTA from './SignupCTA';
import FeatureCard from './FeaturedCard';
import Footer from './Footer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function HomePage() {

  // ---------- Refs ----------
  const bookCarouselRef = useRef(null);
  const userCarouselRef = useRef(null);

  // ---------- State ----------
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ---------- Mock fetch (debounced) ----------
  const fetchBooks = useMemo(
    () =>
      debounce(async () => {
        setIsLoading(true);
        setError(null);
        try {
          // Pure mock – no network request
          setTrendingBooks([
            {
              id: 1,
              title: 'The Great Gatsby',
              author: 'F. Scott Fitzgerald',
              cover:
                'https://covers.openlibrary.org/b/id/12364437-M.jpg',
            },
            {
              id: 2,
              title: '1984',
              author: 'George Orwell',
              cover:
                'https://covers.openlibrary.org/b/id/14845126-M.jpg',
            },
            {
              id: 3,
              title: 'To Kill a Mockingbird',
              author: 'Harper Lee',
              cover:
                'https://covers.openlibrary.org/b/id/14856323-M.jpg',
            },
            {
              id: 4,
              title: 'Pride and Prejudice',
              author: 'Jane Austen',
              cover:
                'https://covers.openlibrary.org/b/id/12767439-M.jpg',
            },
            {
              id: 5,
              title: 'The Catcher in the Rye',
              author: 'J.D. Salinger',
              cover:
                'https://covers.openlibrary.org/b/id/12345678-M.jpg',
            },
            {
              id: 6,
              title: 'Brave New World',
              author: 'Aldous Huxley',
              cover:
                'https://covers.openlibrary.org/b/id/87654321-M.jpg',
            },
          ]);
        } catch {
          setError('Failed to load trending books.');
        } finally {
          setIsLoading(false);
        }
      }, 800),
    []
  );

  // ---------- Run once on mount ----------
  useEffect(() => {
    fetchBooks();
    return () => fetchBooks.cancel(); // cleanup debounce
  }, [fetchBooks]);

  // ---------- Mock data ----------
  const mockUsers = [
    {
      id: 1,
      username: '@BookWorm',
      avatar:
        'https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1441547685.1747836414&semt=ais_hybrid&w=740',
    },
    {
      id: 2,
      username: '@SciFiFan',
      avatar:
        'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?ga=GA1.1.1441547685.1747836414&semt=ais_hybrid&w=740',
    },
    {
      id: 3,
      username: '@FantasyReader',
      avatar:
        'https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869121.jpg?ga=GA1.1.1441547685.1747836414&semt=ais_hybrid&w=740',
    },
    {
      id: 4,
      username: '@Andrew',
      avatar:
        'https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-438.jpg?uid=R189817629&ga=GA1.1.1441547685.1747836414&semt=ais_hybrid&w=740',
    },
    {
      id: 5,
      username: '@Musk',
      avatar:
        'https://img.freepik.com/free-vector/young-prince-traditional-attire_1308-174397.jpg?uid=R189817629&ga=GA1.1.1441547685.1747836414&semt=ais_hybrid&w=740',
    },
    {
      id: 6,
      username: '@Marie',
      avatar:
        'https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869157.jpg?uid=R189817629&ga=GA1.1.1441547685.1747836414&semt=ais_hybrid&w=740',
    },
    {
      id: 7,
      username: '@Anne',
      avatar:
        'https://img.freepik.com/free-vector/young-girl-with-curly-hair_1308-176128.jpg?uid=R189817629&ga=GA1.1.1441547685.1747836414&semt=ais_hybrid&w=740',
    },
    {
      id: 8,
      username: '@Sheldon',
      avatar:
        'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?uid=R189817629&ga=GA1.1.1441547685.1747836414&semt=ais_hybrid&w=740',
    },
  ];

  const mockFeatures = [
    {
      icon: 'Swap Books',
      title: 'Swap Books',
      desc: 'Exchange your favorites with fellow readers',
    },
    {
      icon: 'Join Discussions',
      title: 'Join Discussions',
      desc: 'Connect in vibrant book communities',
    },
    {
      icon: 'Discover Reads',
      title: 'Discover Reads',
      desc: 'Find your next literary adventure',
    },
    {
      icon: 'Reading Streaks',
      title: 'Reading Streaks',
      desc: 'Track your progress and achievements',
    },
    {
      icon: 'Smart Matches',
      title: 'Smart Matches',
      desc: 'AI-powered book recommendations',
    },
    {
      icon: 'Global Community',
      title: 'Global Community',
      desc: 'Connect with readers worldwide',
    },
  ];

  // ---------- Carousel scroll ----------
  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const amount = direction === 'left' ? -350 : 350;
      ref.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // ---------- Coming-Soon Overlay ----------
  const ComingSoonOverlay = () => (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-20 px-4"
    >
      <h1 className="text-5xl md:text-8xl font-bold font-['Lora'] text-white mb-4 animate-pulse">
        BookSwaps Coming Soon!!
      </h1>

      <p className="text-lg md:text-2xl text-white text-center max-w-2xl mb-6">
        BookSwaps: The best platform for book lovers to hangout, solve and
        discuss mysteries, belong to a society.
      </p>

      <div className="bg-white/20 p-6 rounded-xl mb-6 text-center max-w-xl">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          Version 2.0 Teaser
        </h3>
        <p className="text-base md:text-lg text-white">
          Inbuilt SenecaAI – Your Book philosopher companion, help you
          understand and write pieces for you.
        </p>
      </div>

      <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mb-8">
        BookSwaps is where people manage their hard-copy books online, build
        their presence with a personal catalogue, find, meet, share and network
        with others…
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <LoginCTA className="px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all" />
        <SignupCTA className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-transparent to-white/20 rounded-full hover:bg-white/30 transition-all" />
      </div>
    </Motion.div>
  );

  // ---------- Render ----------
  return (
    <div className="min-h-screen bookish-gradient relative overflow-hidden">
      {/* ==== NAVBAR (Desktop) ==== */}
      <nav className="hidden md:flex justify-between items-center px-8 py-4 w-full bg-[hsl(49,52%,88%)] shadow-lg">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/icons/AppLogo.svg"
            alt="BookSwaps Logo"
            className="w-10 h-10"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <h1 className="text-3xl font-bold font-['Lora'] text-[#456A76]">
            BookSwaps
          </h1>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-['Lora'] font-semibold text-[#456A76] hover:text-[#D4A017]"
            >
              Home
            </button>
            <button className="text-xl font-['Lora'] font-semibold text-[#456A76] hover:text-[#D4A017]">
              Library
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <LoginCTA className="px-6 py-3 text-lg font-['Lora'] font-semibold text-[#456A76] border-2 border-[#456A76] rounded-full hover:bg-[#456A76] hover:text-white transition-all" />
            <SignupCTA className="px-6 py-3 text-lg font-['Lora'] font-semibold text-white bg-gradient-to-r from-[#456A76] to-[#D4A017] rounded-full hover:shadow-lg transition-all" />
          </div>
        </div>
      </nav>

      {/* ==== NAVBAR (Mobile) ==== */}
      <nav className="md:hidden flex justify-between items-center px-4 py-4 w-full bg-[hsl(49,52%,88%)] shadow-lg">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/icons/AppLogo.svg"
            alt="BookSwaps Logo"
            className="w-8 h-8"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <h1 className="text-xl font-bold font-['Lora'] text-[#456A76]">
            BookSwaps
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <LoginCTA className="px-3 py-1.5 text-sm font-['Lora'] font-semibold text-[#456A76] border-2 border-[#456A76] rounded-full hover:bg-[#456A76] hover:text-white transition-all" />
          <SignupCTA className="px-3 py-1.5 text-sm font-['Lora'] font-semibold text-white bg-gradient-to-r from-[#456A76] to-[#D4A017] rounded-full transition-all" />
        </div>
        
      </nav>

      {/* ==== HERO + COMING-SOON OVERLAY ==== */}
      <div className="relative">
        <HeroSection
          tagline="BookSwaps: The best platform for book lovers to hangout, solve and discuss mysteries, belong to a society."
          description="Version 2.0: Inbuilt SenecaAI – Your Book philosopher companion, help you understand and write pieces for you. Manage your hard-copy books online, build your catalogue, find, meet, share and network with others..."
        />
        <ComingSoonOverlay />
      </div>

      {/* ==== FEATURES ==== */}
      <section className="py-8 md:py-16 px-4">
        <h2 className="text-xl md:text-3xl font-['Lora'] text-[var(--primary)] text-center mb-6 md:mb-8">
          Why Choose BookSwaps?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mockFeatures.map((f, i) => (
            <Motion.div
              key={`feat-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ==== TRENDING BOOKS ==== */}
      <section className="py-8 md:py-16 px-4 bg-[var(--secondary)]">
        <h2 className="text-xl md:text-3xl font-['Lora'] text-[var(--primary)] text-center mb-6 md:mb-8">
          Trending Books
        </h2>

        {isLoading ? (
          <div className="flex justify-center">
            <div className="bookish-spinner w-8 h-8 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <p className="text-center text-[var(--text)]">{error}</p>
        ) : trendingBooks.length > 0 ? (
          <div className="relative max-w-full mx-auto px-4">
            <button
              onClick={() => scrollCarousel(bookCarouselRef, 'left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full z-10"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <div
              ref={bookCarouselRef}
              className="flex overflow-x-auto space-x-4 md:space-x-6 p-2 md:p-4 scrollbar-hide"
            >
              {trendingBooks.map((b) => (
                <div
                  key={b.id}
                  className="min-w-[250px] md:min-w-[300px] bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl"
                >
                  <img
                    src={b.cover}
                    alt={b.title}
                    className="w-full h-32 md:h-40 object-cover mb-3 md:mb-4 rounded-lg"
                  />
                  <h3 className="text-lg md:text-xl font-['Lora'] text-white">
                    {b.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80">
                    {b.author}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollCarousel(bookCarouselRef, 'right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full z-10"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        ) : (
          <p className="text-center text-[var(--text)]">
            No books available. Start swapping!
          </p>
        )}
      </section>

      {/* ==== MEET BOOK LOVERS ==== */}
      <section className="py-8 md:py-16 px-4">
        <h2 className="text-xl md:text-3xl font-['Lora'] text-[var(--primary)] text-center mb-6 md:mb-8">
          Meet Book Lovers
        </h2>

        <div className="relative max-w-full mx-auto px-4">
          <button
            onClick={() => scrollCarousel(userCarouselRef, 'left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full z-10"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div
            ref={userCarouselRef}
            className="flex overflow-x-auto space-x-4 md:space-x-6 p-2 md:p-4 scrollbar-hide"
          >
            {mockUsers.map((u) => (
              <div
                key={u.id}
                className="min-w-[250px] md:min-w-[300px] bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl text-center"
              >
                <img
                  src={u.avatar}
                  alt={u.username}
                  className="w-16 md:w-24 h-16 md:h-24 rounded-full mx-auto mb-3 md:mb-4"
                />
                <h3 className="text-lg md:text-xl font-['Lora'] text-white">
                  {u.username}
                </h3>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollCarousel(userCarouselRef, 'right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full z-10"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;