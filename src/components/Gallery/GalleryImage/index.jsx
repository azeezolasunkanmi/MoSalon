import PropTypes from "prop-types";

const GalleryImage = ({ src, i }) => {
  const heights = ["h-[40%]", "h-[35%]", "h-[30%]", "h-[60%]"];
  const heightClass = heights[i % heights.length];
  return (
    <>
      <img
        src={src}
        alt="nail picture"
        loading="lazy"
        className={`rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110 w-full object-cover ${heightClass} `}
      />
    </>
  );
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};

export default GalleryImage;
