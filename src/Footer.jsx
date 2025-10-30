// src/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary)] text-[var(--text)] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* ==== SOCIAL MEDIA LINKS ==== */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-['Lora'] text-[var(--primary)] mb-3">
            Connect With Us
          </h3>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>

        {/* ==== DEVELOPER BRANDING & COPYRIGHT ==== */}
        <div className="text-center md:text-right">
          <p className="text-lg font-['Lora'] text-[var(--primary)] mb-2">
            Developed by
          </p>

          <a
            href="https://quantiq.ai"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit QuantIQ Platform"
            className="inline-flex items-center justify-center md:justify-end group"
          >
            <img
              src="/assets/icons/QuantIq.png"
              alt="QuantIQ Logo"
              className="w-8 h-8 mr-2 transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className="
                text-lg font-bold font-['Lora']
                bg-gradient-to-r from-[#00e6e6] to-[#00ccff]
                bg-clip-text text-transparent
                group-hover:underline
                transition-all duration-300
              "
            >
              QuantIQ Dev
            </span>
          </a>

          <p className="text-sm text-[var(--text)] mt-3">
            © 2025 BookSwaps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;