import AvailableBikes from "./AvailableBikes";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <AvailableBikes />
      </div>
    </div>
  );
};

export default Home;
