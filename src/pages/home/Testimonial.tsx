import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa"; // Import quote icon
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonial() {
  return (
    <>
      <div className="bg-[#1B3E41] py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            What Our Clients Say
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* Testimonial 1 */}
            <SwiperSlide className="p-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-[#DF453E] mb-4 text-3xl">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "This bike rental service was amazing! The booking process was
                  super simple, and the bike was in great condition. Highly
                  recommend to anyone looking to rent a bike."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">John Doe</h4>
                    <p className="text-gray-500">Frequent Traveler</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Testimonial 2 */}
            <SwiperSlide className="p-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-[#DF453E] mb-4 text-3xl">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "I loved the variety of bikes available! It was easy to find
                  the perfect one for my trip, and the customer support was
                  excellent."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                    <p className="text-gray-500">Cycling Enthusiast</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Testimonial 3 */}
            <SwiperSlide className="p-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-[#DF453E] mb-4 text-3xl">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Best bike rental experience I've had. Affordable prices and
                  friendly service. Will definitely rent again!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Alex Johnson
                    </h4>
                    <p className="text-gray-500">Adventure Seeker</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-[#DF453E] mb-4 text-3xl">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Best bike rental experience I've had. Affordable prices and
                  friendly service. Will definitely rent again!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Alex Johnson
                    </h4>
                    <p className="text-gray-500">Adventure Seeker</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
