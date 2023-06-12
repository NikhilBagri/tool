import React from "react";
import { AiFillEdit } from "react-icons/ai";

const WorkSpaceCards = ({ title, content }) => {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">{title}</h1>
        <div>
          <AiFillEdit size={25} />
        </div>
      </div>
      <p className="text-[10px] text-gray-500">{content}</p>
    </div>
  );
};

export default WorkSpaceCards;
