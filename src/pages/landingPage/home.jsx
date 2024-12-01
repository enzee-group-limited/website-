import React, { useState } from 'react';
import { homePageImgslide1, homePageImgslide2 } from '../../assets';
import '../../App.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import { Navigation,
  //  Autoplay 
  } from "swiper/modules";
import WhyUsSection from "./whyUs";
import Countdown from "./countDown";


const Home = () => {
  const [isSliding, setIsSliding] = useState(false);

  const handleSlideChange = () => {
    setIsSliding(true); // Trigger animation when slide changes
    setTimeout(() => {
      setIsSliding(false); // Reset animation after it completes
    }, 800); // Timeout duration must match animation duration
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId); // Get the section by ID
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start', // Scroll to the start of the section
      });
    }
  }

  return (
    <div>
      <div className="relative h-[80vh] bg-bgColor font-poppins">
        {/* Swiper Slider as Hero Background */}
        <Swiper
          modules={[Navigation, 
            // Autoplay
          ]} // Add Autoplay module
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          slidesPerView={1}
          loop={true} // Enable looping for continuous sliding
          // autoplay={{
          //   delay: 5000, // Time between each slide transition (in ms)
          //   disableOnInteraction: false, // Autoplay will continue even after interaction
          // }}
          className="h-full"
          onSlideChange={handleSlideChange} // Listen for slide change
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${homePageImgslide1})` }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>

              {/* Text Overlay */}
              <div
                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ${
                  isSliding
                    ? 'transform -translate-x-full opacity-0'
                    : 'transform translate-x-0 opacity-100'
                } transition-all duration-500`}
              >
                <p className="text-white text-4xl font-poppins font-bold text-center">
                  Uniting African <br /> Businesses for Global Impact
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col my-10 sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <button
                    onClick={() => scrollToSection('events')}
                    type="button"
                    className="text-white bg-gradient-to-br from-bgColor to-fontColors hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fontColors dark:focus:ring-fontColors font-medium rounded-lg text-sm px-6 py-3 text-center"
                  >
                    INTERESTED
                  </button>

                  <button
                    onClick={() => scrollToSection('about')}
                    type="button"
                    className="text-white bg-gradient-to-br from-bgColor to-fontColors hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fontColors dark:focus:ring-fontColors font-medium rounded-lg text-sm px-6 py-3 text-center"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${homePageImgslide2})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

              {/* Text Overlay */}
              <div
                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ${
                  isSliding
                    ? 'transform -translate-x-full opacity-0'
                    : 'transform translate-x-0 opacity-100'
                } transition-all duration-500`}
              >
                <div className="mt-8 transform text-sm bg-white bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-md my-10 shadow-lg">
                  <p className="text-white text-lg font-medium text-center">
                    Join us at the Africa Business Festival 2025, where Africa’s{' '}
                    <br /> brightest minds and leading businesses come together
                    to foster <br /> innovation, partnerships, and growth.
                  </p>
                </div>

                {/* Buttons in Column Layout */}
                <div className="flex flex-col items-center my-10 space-y-4">
                  <button
                    onClick={() => scrollToSection('events')}
                    type="button"
                    className="text-white bg-gradient-to-br from-bgColor to-fontColors hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fontColors dark:focus:ring-fontColors font-medium rounded-lg text-sm px-6 py-3 text-center"
                  >
                    VIEW EVENTS SCHEDULE
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          aria-label="Previous Slide"
          className="custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition duration-300 hover:bg-fontColors hover:text-black z-10"
        >
          ❮
        </button>
        <button
          aria-label="Next Slide"
          className="custom-next absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition duration-300 hover:bg-fontColors hover:text-black z-10"
        >
          ❯
        </button>
      </div>

      {/* WHY US SECTION */}
      <WhyUsSection />
    </div>
  );
};

export default Home;
