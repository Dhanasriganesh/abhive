import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundImage = ({ 
  src, 
  className = '', 
  style = {},
  children,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageLoaded(true);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
    };

    // If image is already cached
    if (img.complete) {
      setImageLoaded(true);
      setIsLoading(false);
    }
  }, [src]);

  return (
    <div 
      className={className || 'relative'} 
      style={{
        ...style,
        backgroundImage: imageLoaded ? `url(${src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...props}
    >
      {/* Skeleton Loader */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 animate-shimmer"
        />
      )}

      {/* Content */}
      {children}
    </div>
  );
};

export default BackgroundImage;

