import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer:fine)');

    const handleChange = () => {
      if (mediaQuery.matches) {
        setEnabled(true);
        document.body.classList.add('custom-cursor-active');
      } else {
        setEnabled(false);
        document.body.classList.remove('custom-cursor-active');
      }
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const enterHandler = () => setVisible(true);
    const leaveHandler = () => setVisible(false);
    const downHandler = () => setIsPointerDown(true);
    const upHandler = () => setIsPointerDown(false);
    const interactiveHandler = (e) => {
      const target = e.target.closest(INTERACTIVE_SELECTOR);
      setIsInteractive(Boolean(target));
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseenter', enterHandler);
    window.addEventListener('mouseleave', leaveHandler);
    window.addEventListener('mousedown', downHandler);
    window.addEventListener('mouseup', upHandler);
    document.addEventListener('mouseover', interactiveHandler, true);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseenter', enterHandler);
      window.removeEventListener('mouseleave', leaveHandler);
      window.removeEventListener('mousedown', downHandler);
      window.removeEventListener('mouseup', upHandler);
      document.removeEventListener('mouseover', interactiveHandler, true);
    };
  }, [enabled]);

  if (!enabled) return null;

  const outerSize = isInteractive ? 60 : 44;
  const innerSize = isPointerDown ? 6 : isInteractive ? 10 : 8;

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="cursor-outer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: position.x - outerSize / 2,
              y: position.y - outerSize / 2,
              scale: isPointerDown ? 0.9 : isInteractive ? 1.05 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 30 }}
            className="pointer-events-none fixed z-[9999] hidden lg:block"
            style={{ width: outerSize, height: outerSize }}
          >
            <div className="h-full w-full rounded-full bg-transparent ring-1 ring-blue-900" />
          </motion.div>

          <motion.div
            key="cursor-inner"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: position.x - innerSize / 2,
              y: position.y - innerSize / 2,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className="pointer-events-none fixed z-[9999] hidden lg:block"
            style={{ width: innerSize, height: innerSize }}
          >
            <div
              className={`h-full w-full rounded-full ${
                isPointerDown
                  ? 'bg-gradient-to-r from-blue-950 to-red-600'
                  : isInteractive
                    ? 'bg-blue-950'
                    : 'bg-blue-700'
              }`}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
