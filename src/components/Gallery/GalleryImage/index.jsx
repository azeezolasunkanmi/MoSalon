import PropTypes from "prop-types";

const GalleryImage = ({ src }) => {
  return (
    <>
      <img
        src={src}
        alt="nail picture"
        className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </>
  );
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default GalleryImage;
