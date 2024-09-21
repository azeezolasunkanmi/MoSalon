import HeroSlider from "../../components/Hero/HeroSlider";
import Services from "../../components/Services";
import AboutUS from "../../components/AboutUs";
import Inspo from "../../components/Inspo";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Inspo />
      <AboutUS />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
