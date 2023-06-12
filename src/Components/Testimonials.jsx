import React from 'react'
import images from '../constants/images'

const Testimonials = () => {
  return (
    <div className={`py-28 bg-background bg-[#17213A] md:mb-32`} id="testimonial">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-green-500 sm:text-5xl">
        Client Reviews and Testimonials
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </p>
      </div>

      <div className="mt-10">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative hover:scale-105 ease-in duration-300 bg-gray-200 rounded-lg">
            <div>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background border-primary border-4">
                <img src={images.test1} alt="LOGO" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-500">
                Name
              </p>
            </div>
            <div className="mt-2 ml-16 text-base text-gray-500">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content
              here, content here', making it look like readable English.
            </div>
          </div>
          <div className="relative hover:scale-105 ease-in duration-300 bg-gray-200 rounded-lg">
            <div>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background border-primary border-4">
                <img src={images.test2} alt="LOGO" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-500">
                Name
              </p>
            </div>
            <div className="mt-2 ml-16 text-base text-gray-500">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content
              here, content here', making it look like readable English.
            </div>
          </div>
          <div className="relative hover:scale-105 ease-in duration-300 bg-gray-200 rounded-lg">
            <div>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background border-primary border-4">
                <img src={images.test2}alt="LOGO" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-500">
                Name
              </p>
            </div>
            <div className="mt-2 ml-16 text-base text-gray-500">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content
              here, content here', making it look like readable English.
            </div>
          </div>
          <div className="relative hover:scale-105 ease-in duration-300 bg-gray-200 rounded-lg">
            <div>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background border-primary border-4">
                <img src={images.test3} alt="LOGO" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-500  ">
                Name
              </p>
            </div>
            <div className="mt-2 ml-16 text-base text-gray-500">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content
              here, content here', making it look like readable English.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonials
