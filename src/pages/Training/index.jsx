import PageHeader from "../../components/PageHeader";
import bg from "../../assets/aboutUs/working.png";
import TrainingBlock from "../../components/TrainingBlock";
import Footer from "../../components/Footer";
import { training } from "../../constants";

const Training = () => {
  return (
    <div>
      <PageHeader
        title="training"
        src={bg}
        desc=" Learn the latest techniques, from intricate designs to advanced nail care, and unlock your potential in the exciting world of beauty 🩷"
      />
      <div>
        <h2 className="text-center font-bold text-tertiary  text-[42px] font-amatic mt-20">
          Pick your perfect plan
        </h2>
      </div>
      <div className="p-4 md:flex justify-center flex-wrap gap-10 my-10">
        {training.map((train, i) => (
          <TrainingBlock
            key={i}
            title={train.title}
            price={train.price}
            duration={train.duration}
            outline={train.outline}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Training;
