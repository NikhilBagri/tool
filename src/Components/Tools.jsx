import React from "react";
import tool1 from '../Assets/tool1.svg'
import tool2 from '../Assets/tool2.svg'

const Tools = () => {
  return (
    <section className="bg-[#FCF6F5] py-8" id="tools">
    <div className="container max-w-5xl mx-auto m-8">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
        Tools Provided
      </h1>
      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6 mt-20">
          <h3 className="text-3xl text-green-500 font-bold leading-none mb-3">
            Title
          </h3>
          <p className="text-gray-600">
            We provide teachers with a range of tools that help them be more
            creative, develop their skills, and plan lessons that suit their
            students. Our platform also makes it easier to find and access
            educational resources in a new and efficient way.
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <img src={tool1} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/2 p-6">
          <img src={tool2} alt="" />
        </div>
        <div className="w-full sm:w-1/2 p-6 m-auto ">
          <div className="align-middle text-center ">
            <h3 className="text-3xl  text-green-500  font-bold leading-none mb-3">
              More Tools Coming Soon.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Tools;



