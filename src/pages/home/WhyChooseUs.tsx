import {
  FaDollarSign,
  FaBicycle,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We offer the best bike rental service for all your needs. Here’s why
          you should choose us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Reason 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#DF453E] mb-4">
              <FaDollarSign className="text-5xl mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              We offer the most competitive prices in the industry without
              compromising on quality.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#DF453E] mb-4">
              <FaBicycle className="text-5xl mx-auto" /> {/* Relevant icon */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Wide Selection
            </h3>
            <p className="text-gray-600">
              From mountain bikes to electric bikes, we have the perfect ride
              for every adventure.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#DF453E] mb-4">
              <FaCalendarAlt className="text-5xl mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Easy Booking
            </h3>
            <p className="text-gray-600">
              Our user-friendly platform makes booking a bike easy and quick,
              with no hassle.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#DF453E] mb-4">
              <FaHeadset className="text-5xl mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Our dedicated support team is available 24/7 to assist you with
              any questions or issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
