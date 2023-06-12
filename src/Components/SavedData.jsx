import React from "react";

const SavedData = ({ title, grade, created, updated, onDelete }) => {
  const handleDelete = () => {
    onDelete(); // Call the onDelete function passed from the parent component
  };

  return (
    <tr className="bg-gray-300 text-center rounded-md">
      <td>{title}</td>
      <td>{grade}</td>
      <td>{created}</td>
      <td>{updated}</td>
      <td className="flex justify-around text-sm">
        <span className="px-0 py-4 cursor-pointer text-green-600">View</span>
        <span className="px-0 py-4 cursor-pointer text-yellow-700">Edit</span>
        <span className=" px-0 py-4 cursor-pointer text-red-500" onClick={handleDelete}>
          Delete
        </span>
      </td>
    </tr>
  );
};

export default SavedData;
