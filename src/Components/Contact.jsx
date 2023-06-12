import React from "react";
import contact from "../Assets/contact.svg";

const Contact = () => {
  return (
    <div className="w-full bg-[#17213A]">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className="grid lg:grid-cols-5 gap-8 mt-20">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-fit bg-gray-100 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <p className="text-5xl font-bold text-[#111827]">
                  REACH OUT TO US
                </p>
              </div>
              <div>
                <img src={contact} alt="contact" />
              </div>
              <div>
                <p className="uppercase pt-8 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus numquam vel iusto labore dignissimos. Omnis, iure
                  doloribus ducimus repellat accusantium sapiente, molestias,
                  tempore ipsam quidem obcaecati ratione nesciunt officiis ab.
                </p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl bg-gray-200 shadow-gray-800 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm">Name</label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      type="text"
                      name="phone"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm">Email</label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm ">
                      Designation
                    </label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      type="text"
                      name="designation"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm">Institute</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300"
                    type="text"
                    name="institute"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm">Address</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300"
                    type="text"
                    name="address"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-2 border-gray-300"
                    rows="6"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button className="w-full p-4 text-white bg-green-500 rounded-lg mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
