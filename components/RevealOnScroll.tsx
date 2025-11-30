import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe anymore
          observer.disconnect();
        }
      },
      {
        // Trigger slightly earlier to ensure content is ready when user sees it
        threshold: 0.1,
        rootMargin: '50px', 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const baseClasses = "transition-[opacity,transform] duration-700 ease-out transform-gpu";
  const visibleClasses = "opacity-100 translate-y-0";
  const hiddenClasses = "opacity-0 translate-y-8";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${className} ${isVisible ? visibleClasses : hiddenClasses}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        // Promote to layer only when animating to save memory after
        willChange: isVisible ? 'auto' : 'opacity, transform' 
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;