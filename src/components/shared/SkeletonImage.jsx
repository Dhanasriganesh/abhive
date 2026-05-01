import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkeletonImage = ({ 
  src, 
  alt = '', 
  className = '', 
  style = {},
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true);
    setHasError(false);

    if (imgRef.current && imgRef.current.complete) {
      // Image already loaded
      setIsLoading(false);
    }
  }, [src]);

  const handleLoad = (e) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Skeleton Loader */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 animate-shimmer rounded"
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      )}

      {/* Actual Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        {...props}
      />

      {/* Error State */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-400 text-sm">Failed to load</div>
        </div>
      )}

    </div>
  );
};

export default SkeletonImage;

