import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

const PriceList = () => {
  return (
    <div>
      <PageHeader
        title="Price List"
        src="https://img.freepik.com/free-photo/arrangement-nail-care-accessories-salon_23-2148766592.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
        desc="Explore our offerings below and discover how we can add that perfect touch to your nails 🩷."
      />
      <div className="lg:flex justify-center gap-12 flex-wrap py-4 px-6 md:px-10 xl:px-28">
        <div className="lg:w-[40%]">
          <h3 className="mb-4 text-darkPrimary font-amatic font-bold text-[35px] md:text-[45px] border-b border-primary">
            EXTENSIONS
          </h3>
          <div className="text-tertiary flex flex-col gap-4 mb-8 lg:text-[18px]">
            <div className="flex justify-between">
              <p>STICK ON WITH GEL</p>
              <p>&#8358; 8000</p>
            </div>
            <div className="flex justify-between">
              <p>ACRYLIC OVERLAY</p>
              <p>&#8358; 10, 000</p>
            </div>
            <div className="flex justify-between">
              <p>PLAIN ACRYLIC SET</p>
              <p>&#8358; 14, 000</p>
            </div>
            <div className="flex justify-between">
              <p>BIAB NAILS</p>
              <p>&#8358; 12, 000</p>
            </div>

            <div className="flex justify-between">
              <p>OMBRE/MARBLE</p>
              <p>&#8358; 18, 000</p>
            </div>

            <div className="flex justify-between">
              <p>INFILL</p>
              <p>&#8358; 10, 000</p>
            </div>
            <div className="flex justify-between">
              <p>LONG</p>
              <p>&#8358; 1500</p>
            </div>
            <div className="flex justify-between">
              <p>XL</p>
              <p>&#8358; 2500</p>
            </div>

            <div className="flex justify-between">
              <p>FIXING OF TOES</p>
              <p>&#8358; 8000</p>
            </div>
            <div className="flex justify-between">
              <p>FRENCH TIPS ON TOES</p>
              <p>&#8358; 10, 000</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <h3 className="mb-4 text-darkPrimary font-amatic font-bold text-[35px] md:text-[45px] border-b border-primary">
            Manicure
          </h3>
          <div className="text-tertiary flex flex-col gap-4 mb-8 lg:text-[18px]">
            <div className="flex justify-between">
              <p>GEL POLISH ON HAND</p>
              <p>&#8358; 5000</p>
            </div>
            <div className="flex justify-between">
              <p>GEL POLISH ON TOES</p>
              <p>&#8358; 3000</p>
            </div>

            <div className="flex justify-between">
              <p>BASIC MANICURE</p>
              <p>&#8358; 5000</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[40%]">
          <h3 className="mb-4 text-darkPrimary font-amatic font-bold text-[35px] md:text-[45px] border-b border-primary">
            ADD ONS
          </h3>
          <div className="text-tertiary flex flex-col gap-4 mb-8 lg:text-[18px]">
            <div className="flex justify-between">
              <p>NAIL ART</p>
              <p>&#8358; 500/FINGER</p>
            </div>
            <div className="flex justify-between">
              <p>STONES</p>
              <p>&#8358; 500/FINGER</p>
            </div>
            <div className="flex justify-between">
              <p>CHROME</p>
              <p>&#8358; 700/FINGER</p>
            </div>

            <div className="flex justify-between">
              <p>NAIL CHARM</p>
              <p>&#8358; 1000/FINGER</p>
            </div>
            <div className="flex justify-between">
              <p>GLITTERS</p>
              <p>&#8358; 1000/FINGER</p>
            </div>
            <div className="flex justify-between">
              <p>3D DESIGN</p>
              <p>&#8358; 1500/FINGER</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <h3 className="mb-4 text-darkPrimary font-amatic font-bold text-[35px] md:text-[45px] border-b border-primary">
            EXTRAS
          </h3>
          <div className="text-tertiary flex flex-col gap-4 mb-8 lg:text-[18px]">
            <div className="flex justify-between">
              <p>SOAK OFF</p>
              <p>&#8358; 3000</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center md:text-[18px] text-tertiary py-10">
        <b className="text-darkPrimary">NOTICE:</b> DESIGN INCURS ADDITIONAL
        COST
      </p>
      <Footer />
    </div>
  );
};

export default PriceList;
