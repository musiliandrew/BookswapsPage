// src/SignupCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * SignupCTA
 * -------------------------------------------------
 * Props:
 *   className – extra Tailwind classes (optional)
 *
 * Behaviour:
 *   • Real router → navigate('/register')
 *   • Static build → fallback (mailchimp, scroll, alert)
 */
const SignupCTA = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    try {
      // ---- 1. Try real navigation ----
      navigate('/register');
    } catch {
      // ---- 2. Fallback for static site ----

      // OPTION A: Open Mailchimp / Typeform waitlist
      // window.open('https://your-mailchimp-form.com', '_blank');

      // OPTION B: Scroll to a hidden signup section on the same page
      const signupSection = document.getElementById('signup-section');
      if (signupSection) {
        e.preventDefault();
        signupSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // OPTION C: Simple alert (demo)
      // alert('Sign up coming soon! Join the waitlist below.');
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
      aria-label="Join Now"
    >
      Join Now
    </motion.button>
  );
};

export default SignupCTA;