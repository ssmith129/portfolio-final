import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ComputisPrototypeSectionProps {
  className?: string;
}

export default function ComputisPrototypeSection({ className }: ComputisPrototypeSectionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const retryLoad = () => {
    setIsLoading(true);
    setHasError(false);
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "w-full bg-[#F5F5F5] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24",
        "animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500",
        className
      )}
      aria-labelledby="prototype-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px]">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 
            id="prototype-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.3px]"
          >
            Interactive Prototype
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Experience the full Computis crypto tax platform with real functionality and data flows
          </p>
        </div>

        {/* Prototype Container */}
        <div className="relative">
          
          {/* Main Iframe Container */}
          <div 
            className={cn(
              "relative bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px]",
              "shadow-md hover:shadow-xl transition-all duration-500",
              "border-2 border-white/20 overflow-hidden",
              "group"
            )}
          >
            
            {/* Loading State */}
            {isLoading && (
              <div 
                className="absolute inset-0 z-10 flex items-center justify-center bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px]"
                role="status" 
                aria-label="Loading prototype"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 animate-spin">
                    <div className="w-full h-full border-4 border-[#9FA0A3] border-t-[#131417] rounded-full"></div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3]">
                    Loading Interactive Prototype...
                  </p>
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div 
                className="absolute inset-0 z-10 flex items-center justify-center bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px]"
                role="alert"
                aria-label="Prototype loading error"
              >
                <div className="text-center p-6 sm:p-8 md:p-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#131417] mb-2">
                    Unable to Load Prototype
                  </h3>
                  <p className="text-sm sm:text-base text-[#9FA0A3] mb-4 max-w-[400px] mx-auto">
                    The interactive prototype couldn't be loaded. Please check your connection and try again.
                  </p>
                  <button
                    onClick={retryLoad}
                    className="bg-[#131417] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[20px] sm:rounded-[25px] text-sm sm:text-base font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#131417] focus:ring-offset-2"
                    aria-label="Retry loading prototype"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {/* Iframe */}
            {isInView && (
              <iframe
                ref={iframeRef}
                src="https://portfolio-smith-design.netlify.app/"
                className={cn(
                  "w-full transition-opacity duration-500",
                  "rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px]",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
                style={{
                  height: 'clamp(400px, 50vh, 800px)', // Responsive height
                  minHeight: '400px',
                  maxHeight: '800px'
                }}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                title="Computis Crypto Tax Platform - Interactive Prototype"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-top-navigation-by-user-activation"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                aria-label="Interactive prototype of the Computis crypto tax platform"
              />
            )}

            {/* Gradient Overlay for Enhanced Visual Integration */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] group-hover:to-black/10 transition-all duration-500 pointer-events-none"></div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <a
              href="https://portfolio-smith-design.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#131417] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#131417] focus:ring-offset-2 group"
              aria-label="Open prototype in new tab"
            >
              <span>Open in New Tab</span>
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>

        {/* Usage Instructions */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center">
          <div className="bg-white/50 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-4 sm:p-6 md:p-8 border border-white/20">
            <p className="text-sm sm:text-base md:text-lg text-[#9FA0A3] leading-[1.5em] max-w-[600px] mx-auto">
              <strong className="text-[#131417]">Interaction Guide:</strong> Explore the dashboard, navigate through different sections, and test the core tax calculation workflows. The prototype includes sample crypto transaction data for demonstration purposes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}