import { useState, useEffect, useRef } from "react";
import { heroContent } from "../../../constants";
import Hero from "..";

const TRANSITION_DURATION = 1000; // Single source of truth
const SLIDE_INTERVAL = 5000;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalSlides = heroContent.length;
  const timeoutRef = useRef(null);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev + 1);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentSlide === totalSlides) {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Wait for transition to complete, then reset
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);

        // Re-enable transitions after a frame
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      }, TRANSITION_DURATION);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, totalSlides]);

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {heroContent.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide % totalSlides === i
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slider */}
      <div
        className="flex"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning
            ? `transform ${TRANSITION_DURATION}ms ease-in-out`
            : "none",
        }}
      >
        {heroContent.map((content, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <Hero
              title1={content.title1}
              title2={content.title2}
              description={content.description}
              image={content.image}
            />
          </div>
        ))}

        {/* Clone the first slide to the end for infinite scroll effect */}
        <div className="w-full flex-shrink-0">
          <Hero
            title1={heroContent[0].title1}
            title2={heroContent[0].title2}
            description={heroContent[0].description}
            image={heroContent[0].image}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
