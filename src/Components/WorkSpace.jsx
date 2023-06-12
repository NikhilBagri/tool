import React, { useState } from "react";
import WorkSpaceCards from "./WorkSpaceCards";

const Contact = () => {
  const [topicName, setTopicName] = useState("");
  const handleTopicNameChange = (e) => {
    setTopicName(e.target.value);
  };

  const [message, setMessage] = useState("");
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-full bg-[#17213A]">
      <div className="max-w-[1440px] m-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full bg-[#FCF6F5] rounded-xl p-4">
            <div className="h-auto">
              <div>
                <h2 className="text-xl font-bold">Workspace</h2> {/* Heading */}
                <p className="my-4">
                  Maecenas malesuada porta lobortis, suspendisse potenti. Nullam
                  nunc dolor aliquam ultricies.
                </p>{" "}
                {/* Paragraph */}
                <hr className="border-gray-500 my-4" /> {/* Horizontal line */}
              </div>
              <div>
                <h3 className="text-lg font-bold">Topic 1</h3> {/* Heading 1 */}
                <input
                  type="text"
                  value="topic"
                  className="border border-gray-400 rounded-lg px-3 py-2 mt-2 w-full"
                  placeholder="Enter topic name"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Topic 2</h3> {/* Heading 2 */}
                <select className="border border-gray-400 rounded-lg px-3 py-2 mt-2 w-full">
                  {/* Dropdown 2 */}
                  <option value="optionA">Option A</option>
                  <option value="optionB">Option B</option>
                  <option value="optionC">Option C</option>
                </select>
              </div>
            </div>
            <div className="h-auto mt-10 grid grid-cols-2 gap-4">
              <WorkSpaceCards
                title="Title"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquid quae omnis assumenda quam molestiae consectetur saepe rem beatae nobis magni deleniti, libero fugit ducimus exercitationem ratione molestias veritatis!"
              />
              <WorkSpaceCards
                title="Title"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquid quae omnis assumenda quam molestiae consectetur saepe rem beatae nobis magni deleniti, libero fugit ducimus exercitationem ratione molestias veritatis!"
              />
              <WorkSpaceCards
                title="Title"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquid quae omnis assumenda quam molestiae consectetur saepe rem beatae nobis magni deleniti, libero fugit ducimus exercitationem ratione molestias veritatis!"
              />
              <WorkSpaceCards
                title="Title"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquid quae omnis assumenda quam molestiae consectetur saepe rem beatae nobis magni deleniti, libero fugit ducimus exercitationem ratione molestias veritatis!"
              />
              <WorkSpaceCards
                title="Title"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquid quae omnis assumenda quam molestiae consectetur saepe rem beatae nobis magni deleniti, libero fugit ducimus exercitationem ratione molestias veritatis!"
              />
              <WorkSpaceCards
                title="Title"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquid quae omnis assumenda quam molestiae consectetur saepe rem beatae nobis magni deleniti, libero fugit ducimus exercitationem ratione molestias veritatis!"
              />
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl bg-[#FCF6F5]  rounded-lg lg:p-4">
            <div className="w-auto">
              <input
                type="text"
                value={topicName}
                onChange={handleTopicNameChange}
                className="border border-gray-400 rounded-lg px-3 py-2 mt-2 w-full"
                placeholder="Enter topic name"
              />
              <textarea
                rows={20}
                value={message}
                onChange={handleMessageChange}
                className="w-full border border-gray-400 rounded-lg px-3 py-2 mt-2"
                placeholder="Enter message"
              ></textarea>
              <div>TOOLS</div>
            </div>
            <div className="flex md:flex-row md:space-y-0 md:space-x-5 py-2 px-5 md:px-12 space-x-2">
              <button className="bg-[#111827] text-white rounded-lg px-4 md:px-8 py-2">
                Save
              </button>
              <button className="bg-[#FF2B2B] text-white rounded-lg px-4 md:px-8 py-2">
                Clear
              </button>
              <button className="bg-[#FFAF40] text-white rounded-lg px-4 md:px-8 py-2">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
