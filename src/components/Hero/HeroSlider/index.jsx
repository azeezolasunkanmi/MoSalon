import { useState, useEffect } from "react";
import { heroContent } from "../../../constants";
import Hero from "..";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Fade out the content

      // Change the slide after the fade out ends
      setTimeout(() => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % heroContent.length);
        setFade(true); // Fade in the new content
      }, 600);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Hero
      fade={fade}
      title1={heroContent[currentSlide]?.title1}
      title2={heroContent[currentSlide]?.title2}
      description={heroContent[currentSlide]?.description}
      image={heroContent[currentSlide]?.image}
    />
  );
};

export default HeroSlider;
