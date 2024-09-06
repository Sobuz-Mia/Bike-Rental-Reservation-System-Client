import { Button, DatePicker, Input } from "@nextui-org/react";
import image from "./../../assets/images/banner-bg.jpg";
import { FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Set min-height to ensure it adapts based on content
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="max-w-7xl px-4 md:px-0">
        {/* Add padding for smaller devices */}
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Easy Bike Rentals, Anytime, Anywhere
        </h1>
        <p className="my-6 md:my-10 text-lg md:text-2xl text-white">
          Rent bikes near you quickly and hassle-free. Perfect for exploring or
          getting around town!
        </p>
        <div className="bg-white p-5 rounded-md">
          <h1 className="text-2xl font-semibold md:text-3xl mb-5">
            <span className="text-[#DF453E]">Book</span> a city bike
          </h1>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Input
              label="Search"
              isClearable
              size="lg"
              radius="lg"
              placeholder="Type to search..."
              startContent={<FaSearch />}
            />
            <DatePicker size="lg" label="Pick-Up Date" />
            <DatePicker size="lg" label="Drop-Off Date" />
            <Button
              size="lg"
              className="btn bg-[#DF453E] text-white font-semibold text-center mt-3 md:mt-0"
            >
              Book Bike
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
