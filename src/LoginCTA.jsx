// src/LoginCTA.jsx
import { motion } from 'framer-motion';

/**
 * LoginCTA
 * -------------------------------------------------
 * Props:
 *   className – extra Tailwind classes (optional)
 *
 * Behaviour:
 *   • Shows "Notify Me" for coming soon page
 *   • Collects email for launch notification
 */
const LoginCTA = ({ className = '' }) => {
  const handleClick = () => {
    const email = prompt('Enter your email to get notified when we launch:');
    if (email && email.includes('@')) {
      alert(`Thank you! We'll notify you at ${email} when BookSwaps launches.`);
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
        ${className}
      `.trim()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      aria-label="Get Notified"
    >
      Notify Me
    </motion.button>
  );
};

export default LoginCTA;