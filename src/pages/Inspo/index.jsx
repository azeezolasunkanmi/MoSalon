import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import PageHeader from "../../components/PageHeader";
import { stickOnNails, acrylicNails } from "../../constants";

const Inspo = () => {
  return (
    <div>
      <PageHeader
        title="Nail Inspiration"
        src="https://img.freepik.com/free-photo/blle-leaf-orange-background-with-copy-space_23-2148317557.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
        desc="Discover stunning designs and creative ideas to inspire your next look.  From chic and simple to dazzling and daring, our gallery is here to ignite your creativity. 🩷"
      />
      <div>
        <h2 className="px-2 m-4 md:mx-10 lg:text-[62px] font-amatic font-bold text-[42px] text-tertiary border-l-8 border-darkPrimary">
          Acrylic
        </h2>
        <Gallery imageArray={acrylicNails} />

        <h2 className="px-2 m-4 md:mx-10 lg:text-[62px] font-amatic font-bold text-[42px] text-tertiary border-l-8 border-darkPrimary">
          Stick ON
        </h2>
        <Gallery imageArray={stickOnNails} />
        <h2 className="px-2 m-4 md:mx-10 lg:text-[62px] font-amatic font-bold text-[42px] text-tertiary border-l-8 border-darkPrimary">
          Gel Polish
        </h2>
        <Gallery imageArray={stickOnNails} />
        <h2 className="px-2 m-4 md:mx-10 lg:text-[62px] font-amatic font-bold text-[42px] text-tertiary border-l-8 border-darkPrimary">
          Biab Nails
        </h2>
        <Gallery imageArray={acrylicNails} />
      </div>

      <Footer />
    </div>
  );
};

export default Inspo;
