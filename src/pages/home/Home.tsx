import AvailableBikes from "./AvailableBikes";
import Banner from "./Banner";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <AvailableBikes />
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default Home;
