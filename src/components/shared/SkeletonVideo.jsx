import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkeletonVideo = ({ 
  src, 
  className = '', 
  style = {},
  onLoadedData,
  onError,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
  preload = 'auto',
  children,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true);
    setHasError(false);

    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      if (onLoadedData) onLoadedData();
    };

    const handleError = (e) => {
      setIsLoading(false);
      setHasError(true);
      if (onError) onError(e);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    // Check if video is already loaded
    if (video.readyState >= 3) {
      setIsLoading(false);
    }

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [src, onLoadedData, onError]);

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Skeleton Loader */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 animate-shimmer rounded z-10"
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      )}

      {/* Actual Video */}
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        onError={(e) => {
          setHasError(true);
          setIsLoading(false);
          if (onError) onError(e);
        }}
        onLoadedData={() => {
          setIsLoading(false);
          if (onLoadedData) onLoadedData();
        }}
        onCanPlay={() => {
          setIsLoading(false);
        }}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        {...props}
      >
        {children}
      </video>

      {/* Error State */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-gray-400 text-sm">Failed to load video</div>
        </div>
      )}

    </div>
  );
};

export default SkeletonVideo;

