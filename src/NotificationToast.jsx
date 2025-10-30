// src/components/NotificationToast.jsx
import { motion as Motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const variants = {
  enter: { y: -100, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

export default function NotificationToast({
  id,
  message,
  type = 'info',   // info | success | warning | error
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), 3000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const bg = {
    info: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-amber-600',
    error: 'bg-red-600',
  }[type];

  return (
    <Motion.div
      layout
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className={`flex items-center justify-between max-w-md w-full p-4 rounded-lg shadow-lg text-white ${bg} text-sm`}
    >
      <span>{message}</span>
      <button
        onClick={() => onClose(id)}
        className="ml-4 text-white/80 hover:text-white"
        aria-label="Close"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </Motion.div>
  );
}