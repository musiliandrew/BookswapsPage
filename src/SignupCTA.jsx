// src/SignupCTA.jsx
import { motion } from 'framer-motion';

/**
 * SignupCTA
 * -------------------------------------------------
 * Props:
 *   className – extra Tailwind classes (optional)
 *
 * Behaviour:
 *   • Shows "Get Early Access" for coming soon page
 *   • Collects email for launch notification
 */
const SignupCTA = ({ className = '' }) => {
  const handleClick = () => {
    const email = prompt('Enter your email for early access:');
    if (email && email.includes('@')) {
      alert(`Awesome! You'll be among the first to know when BookSwaps launches.\n\nWe'll send updates to: ${email}`);
    } else if (email) {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`
        bookish-button-enhanced
        text-[var(--secondary)]
        px-4 py-2
        rounded-full
        font-['Open_Sans']
        font-medium
        transition-all
        ${className}
      `.trim()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      aria-label="Get Early Access"
    >
      Get Early Access
    </motion.button>
  );
};

export default SignupCTA;