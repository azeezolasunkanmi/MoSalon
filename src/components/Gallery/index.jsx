// import { nails } from "../../constants";
import { useRef } from "react";
import GalleryImage from "./GalleryImage";
import { BookingsContext } from "../../store/BookingContext";

const Gallery = () => {
  // Reference for the gallery container
  const galleryRef = useRef(null);
  const { stickOnImageUrls } = BookingsContext();

  // Scroll the gallery to the left
  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  // Scroll the gallery to the right
  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative p-4 md:p-10 bg-white">
      {stickOnImageUrls.length === 0 && (
        <div className="columns-2 gap-5 lg:gap-8 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 h-[80vh] overflow-y-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md bg-gray-200 animate-pulse h-[200px] w-full"
            ></div>
          ))}
        </div>
      )}
      {stickOnImageUrls.length >= 1 && (
        <div
          ref={galleryRef}
          className="columns-2 gap-5 lg:gap-7 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 h-[80vh] overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
        >
          {stickOnImageUrls.map((nail, i) => (
            <GalleryImage key={i} i={i} src={nail} />
          ))}
        </div>
      )}
      <div className="flex justify-center items-center gap-10">
        <button
          className="bg-darkPrimary hover:bg-primary text-white text-[18px] px-3 py-2 rounded-full z-10"
          onClick={scrollLeft}
        >
          &#8592; {/* Left arrow icon */}
        </button>

        {/* Right Scroll Button */}
        <button
          className="bg-darkPrimary hover:bg-primary text-white text-[18px] px-3 py-2 rounded-full z-10"
          onClick={scrollRight}
        >
          &#8594; {/* Right arrow icon */}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
