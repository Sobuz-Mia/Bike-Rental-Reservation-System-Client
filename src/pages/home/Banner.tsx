import { Button, DatePicker, Input } from "@nextui-org/react";
import image from "./../../assets/images/banner-bg.jpg";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        opacity: ".8",
      }}
    >
      <div>
        <h2 className="text-7xl font-bold">
          Easy Bike Rentals, Anytime, Anywhere
        </h2>
        <p style={{ color: "#fff", marginBottom: "$12" }}>
          Rent bikes near you quickly and hassle-free. Perfect for exploring or
          getting around town!
        </p>
        <div className="flex justify-center gap-1">
          <Input placeholder="Search by location" size="lg" />
          <DatePicker size="lg" label="Birth date" className="" />
          <DatePicker size="lg" label="Birth date" className="" />
          <Button color="primary">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
