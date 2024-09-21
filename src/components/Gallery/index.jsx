import { nails } from "../../constants";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  return (
    <div className="p-5 md:p-10 bg-white">
      <div className="columns-2 gap-5 lg:gap-8 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 h-[80vh] overflow-x-auto overflow-y-hidden scrollbar-hide">
        {nails.map((nail, i) => (
          <GalleryImage key={i} src={nail.src} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
