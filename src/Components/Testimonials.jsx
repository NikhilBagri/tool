import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../constants/images';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`py-28 bg-background bg-[#FCF6F5]`} id="testimonial">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-5xl">
            Client Reviews and Testimonials
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English.
          </p>
        </div>

        <div className="mt-10">
          <Slider {...settings}>
            <div className="relative  bg-gray-200 rounded-lg">
              <div>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background border-primary border-4">
                  <img src={images.test1} alt="LOGO" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-green-500">Name</p>
              </div>
              <div className="mt-2 ml-16 text-base text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English.
              </div>
            </div>
            <div className="relative  bg-gray-200 rounded-lg">
              <div>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background border-primary border-4">
                  <img src={images.test2} alt="LOGO" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-green-500">Name</p>
              </div>
              <div className="mt-2 ml-16 text-base text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English.
              </div>
            </div>
            <div className="relative  bg-gray-200 rounded-lg">
              <div>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background border-primary border-4">
                  <img src={images.test2} alt="LOGO" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-green-500">Name</p>
              </div>
              <div className="mt-2 ml-16 text-base text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English.
              </div>
            </div>
            <div className="relative  bg-gray-200 rounded-lg">
              <div>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background border-primary border-4">
                  <img src={images.test3} alt="LOGO" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-green-500">Name</p>
              </div>
              <div className="mt-2 ml-16 text-base text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English.
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
