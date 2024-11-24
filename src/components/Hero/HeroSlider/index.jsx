import { useState, useEffect } from "react";
import { heroContent } from "../../../constants";
import Hero from "..";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalSlides = heroContent.length;

  // Handle slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => prevSlide + 1);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Reset position if we reach the cloned slide (after the last one)
  useEffect(() => {
    if (currentSlide === totalSlides) {
      // Temporarily turn off transitions to instantly jump to the first slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0); // Jump to the first real slide
      }, 1000); // Match the transition time (1 second)

      // Re-enable transitions after resetting (with a slight delay)
      setTimeout(() => {
        setIsTransitioning(true);
      }, 1050); // Small delay after resetting to avoid visual jump
    }
  }, [currentSlide, totalSlides]);

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className={`flex ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroContent.map((content, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <Hero
              isTransitioning={isTransitioning}
              title1={content?.title1}
              title2={content?.title2}
              description={content?.description}
              image={content?.image}
            />
          </div>
        ))}

        {/* Clone the first slide to the end for infinite scroll effect */}
        <div className="w-full flex-shrink-0">
          <Hero
            isTransitioning={isTransitioning}
            title1={heroContent[0]?.title1}
            title2={heroContent[0]?.title2}
            description={heroContent[0]?.description}
            image={heroContent[0]?.image}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
