import AvailableBikes from "./AvailableBikes";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <AvailableBikes />
      </div>
      <Testimonial />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
