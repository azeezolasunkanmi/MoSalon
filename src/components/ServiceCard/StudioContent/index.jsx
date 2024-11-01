import { Link } from "react-router-dom";

const StudioContent = () => {
  return (
    <div className="mb-10">
      <div className="bg-lightPrimary">
        <p className="px-8 py-4 text-center text-secondary md:w-[70%] xl:w-[60%] mx-auto lg:text-[18px]">
          Our studio is dedicated to providing a relaxing atmosphere where you
          can express your style through beautifully crafted nail designs.
          Whether you&apos;re here for a bold new look or a subtle refresh, we
          are here to make sure you leave feeling confident and fabulous.
        </p>
        <p className="w-[100px] h-[5px] mx-auto bg-darkPrimary"></p>
      </div>
      <div className="p-8 mt-10 md:flex justify-center flex-wrap gap-10 bg-lightPrimary lg:p-12 xl:px-32">
        <div className="flex h-[100px] gap-4 overflow-hidden rounded-md md:w-[45%] lg:w-[30%] shrink-0 mb-10">
          <div className="w-[40%]">
            <img
              src="https://img.freepik.com/premium-photo/pink-blue-french-manicure-with-painted-clouds_1264676-34.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt="arcylic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-col gap-2 items-center shrink-0">
            <h2 className="font-amatic font-bold text-tertiary text-[40px]">
              Acrylic set
            </h2>
            <p className="text-[14px] text-darkPrimary underline">
              <Link to="/inspo">View in Inspo</Link>
            </p>
          </div>
        </div>
        <div className="flex h-[100px] gap-4 overflow-hidden rounded-md md:w-[45%] lg:w-[30%] shrink-0 mb-10">
          <div className="w-[40%]">
            <img
              src="https://img.freepik.com/free-photo/woman-showing-her-beautiful-nails_23-2148697087.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt="arcylic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-col gap-2 items-center shrink-0">
            <h2 className="font-amatic font-bold text-tertiary text-[40px]">
              Gel polish
            </h2>
            <p className="text-[14px] text-darkPrimary underline">
              <Link to="/inspo">View in Inspo</Link>
            </p>
          </div>
        </div>
        <div className="flex h-[100px] gap-4 overflow-hidden rounded-md md:w-[45%] lg:w-[30%] shrink-0 mb-10">
          <div className="w-[40%]">
            <img
              src="https://img.freepik.com/free-photo/woman-showing-her-nail-art-fingernails_23-2149820385.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt="arcylic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-col gap-2 items-center shrink-0">
            <h2 className="font-amatic font-bold text-tertiary text-[40px]">
              Stick on
            </h2>
            <p className="text-[14px] text-darkPrimary underline">
              <Link to="/inspo">View in Inspo</Link>
            </p>
          </div>
        </div>
        <div className="flex h-[100px] gap-4 overflow-hidden rounded-md md:w-[45%] lg:w-[30%] shrink-0 mb-10">
          <div className="w-[40%]">
            <img
              src="https://img.freepik.com/free-photo/woman-showing-her-nail-art-fingernails-against-monster-leaf_23-2149820448.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt="arcylic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-col gap-2 items-center shrink-0">
            <h2 className="font-amatic font-bold text-tertiary text-[40px]">
              biab nails
            </h2>
            <p className="text-[14px] text-darkPrimary underline">
              <Link to="/inspo">View in Inspo</Link>
            </p>
          </div>
        </div>
        <div className="flex h-[100px] gap-4 overflow-hidden rounded-md md:w-[45%] lg:w-[30%] shrink-0 mb-10">
          <div className="w-[40%]">
            <img
              src="https://img.freepik.com/premium-photo/afro-american-woman-hand-with-flowers-painted-her-long-nails-summer-themed-nail-art_1168752-1816.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              className="w-full h-full object-cover"
              alt="arcylic"
            />
          </div>
          <div className="flex-col gap-2 items-center shrink-0">
            <h2 className="font-amatic font-bold text-tertiary text-[40px]">
              Acrylic overlay
            </h2>
            <p className="text-[14px] text-darkPrimary underline">
              <Link to="/inspo">View in Inspo</Link>
            </p>
          </div>
        </div>
        <div className="flex h-[100px] gap-4 overflow-hidden rounded-md md:w-[45%] lg:w-[30%] shrink-0 mb-10">
          <div className="w-[40%]">
            <img
              src="https://img.freepik.com/premium-photo/afro-american-woman-hand-with-flowers-painted-her-long-nails-summer-themed-nail-art_1168752-1816.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              className="w-full h-full object-cover"
              alt="arcylic"
            />
          </div>
          <div className="flex-col gap-2 items-center shrink-0">
            <h2 className="font-amatic font-bold text-tertiary text-[40px]">
              soak off
            </h2>
            <p className="text-[14px] text-darkPrimary underline">
              {/* View in Inspo */}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link
          to="/booknow"
          className="text-center py-4 px-6 text-[18px] font-semibold font-poppins bg-primary rounded-md text-tertiary hover:bg-primary"
        >
          BOOK A STUDIO SESH
        </Link>
      </div>
    </div>
  );
};

export default StudioContent;
