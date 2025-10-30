// src/LoginCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * LoginCTA
 * -------------------------------------------------
 * Props:
 *   className – extra Tailwind classes (optional)
 *
 * Behaviour:
 *   • If a real route exists → navigates to /login
 *   • If the site is static → opens a modal / mailchimp form / external login page
 *   • Fully animated with Framer Motion
 */
const LoginCTA = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // ---- 1. Try real navigation (works when router is active) ----
    try {
      navigate('/login');
    } catch {
      // ---- 2. Fallback for static build (no router) ----
      // Option A – open a mailchimp / typeform signup
      // window.open('https://your-mailchimp-form.com', '_blank');

      // Option B – scroll to a hidden signup form on the same page
      const signupEl = document.getElementById('signup-section');
      if (signupEl) {
        e.preventDefault();
        signupEl.scrollIntoView({ behavior: 'smooth' });
      }

      // Option C – just alert (quick demo)
      // alert('Login page coming soon! Join the waitlist below.');
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
      aria-label="Sign In"
    >
      Sign In
    </motion.button>
  );
};

export default LoginCTA;