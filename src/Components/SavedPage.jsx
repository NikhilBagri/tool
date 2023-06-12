import React, { useState } from "react";
import SavedData from "./SavedData";

const SavedPage = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowAll = () => {
    // Retrieve all the data (e.g., from an API or database) and update the data state
    // For now, we will simply set it to an array of all the data objects
    const allData = [
      {
        id: 1,
        title: "New",
        grade: "Grade 1",
        created: "Today",
        updated: "2 Min ago",
      },
      // Add more data objects here
    ];
    setData(allData);
  };
  const handleShowview = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-[#17213A]">
        <div className="w-[90%] md:w-[80%] lg:w-[80%] min-h-[40rem] bg-white rounded-md px-10 py-5">
          <div className="w-full text-4xl font-bold">Content</div>
          <p className="text-left mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sequi
            delectus laudantium ullam quod iste quisquam tempore!
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 mt-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add New
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleShowAll}
            >
              Show All
            </button>
          </div>
          <div className="mt-4">
            <table className="w-full">
              <thead>
                <tr className="text-lg">
                  <th className="px-4 py-2 ">Title</th>
                  <th className="px-4 py-2 hidden sm:table-cell">Grade</th>
                  <th className="px-4 py-2 hidden sm:table-cell">Created</th>
                  <th className="px-4 py-2 hidden sm:table-cell">Updated</th>
                  <th className="px-4 py-2 hidden sm:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full"></div>
                        <div className="ml-4">{item.title}</div>
                      </div>
                    </td>
                    <td className="px-4 py-2 hidden sm:table-cell">
                      {item.grade}
                    </td>
                    <td className="px-4 py-2 hidden sm:table-cell">
                      {item.created}
                    </td>
                    <td className="px-4 py-2 hidden sm:table-cell">
                      {item.updated}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                        onClick={() => handleShowview(item)}
                      >
                        View
                      </button>

                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ml-2">
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold  rounded ml-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {modalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 ">
                <div className="bg-gray-200 w-4/5 md:w-3/5 lg:w-1/2 rounded-lg shadow-xl">
                  <div className="p-4">
                    <h1 className="text-2xl font-bold mb-2">
                      {selectedItem?.title}
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores, consequuntur. Laborum culpa mollitia maxime eum
                      blanditiis earum praesentium necessitatibus repudiandae?
                      Omnis qui ducimus repellendus soluta unde rem. Repellat,
                      facilis obcaecati. Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Magnam earum perferendis eveniet veniam
                      libero necessitatibus aut ipsa voluptate corporis. Eveniet
                      consequatur culpa ab modi? Aspernatur eum magni eius
                      veritatis error! Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Nobis laborum, laudantium distinctio
                      excepturi architecto quod, quaerat deserunt, atque ad
                      tempora incidunt soluta. Tempora et neque vero eum a non?
                      Totam?Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quidem voluptatum quos magnam optio, quo ipsum
                      praesentium velit harum nisi temporibus error aut
                      distinctio eveniet asperiores at, iste dolores vitae sunt!
                    </p>
                  </div>
                  <div className="flex justify-end p-4">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPage;
