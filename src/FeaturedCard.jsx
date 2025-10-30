// src/FeatureCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * FeatureCard
 * -------------------------------------------------
 * Props:
 *   icon  – string (emoji or SVG)
 *   title – string
 *   desc  – string
 */
const FeatureCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      className="
        group
        relative
        bookish-glass
        bookish-shadow
        p-6 md:p-8
        rounded-2xl
        text-center
        border
        border-white/20
        overflow-hidden
        transition-all
        duration-500
        hover:bg-opacity-90
        desktop-hover
      "
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        rotateY: 5,
        rotateX: 2,
      }}
    >
      {/* Icon */}
      <div
        className="
          text-4xl md:text-6xl
          mb-6 md:mb-8
          group-hover:scale-110
          transition-transform
          duration-300
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          text-xl md:text-2xl
          font-['Lora']
          text-[var(--primary)]
          mb-4 md:mb-6
          font-bold
          group-hover:text-[var(--accent)]
          transition-colors
          duration-300
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-base md:text-lg
          text-[var(--text)]
          font-['Open_Sans']
          leading-relaxed
          desktop-text
        "
      >
        {desc}
      </p>

      {/* Decorative Dots */}
      <div
        className="
          absolute top-4 right-4
          w-2 h-2
          bg-[var(--accent)]
          rounded-full
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      />
      <div
        className="
          absolute bottom-4 left-4
          w-1 h-1
          bg-[var(--primary)]
          rounded-full
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          delay-100
        "
      />
    </motion.div>
  );
};

export default FeatureCard;