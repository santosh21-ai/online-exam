import React from "react";

const user = {
  name: "Rebecca Nicholas",
  role: "Product Designer",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const Head = () => {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="sm:flex sm:space-x-5">
        <div className="flex-shrink-0">
          <img
            className="mx-auto h-20 w-20 rounded-full"
            src={user.imageUrl}
            alt="image"
          />
        </div>
        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
          {/* <p className="text-sm font-medium text-gray-600">Welcome back,</p> */}
          <p className="text-xl font-bold text-blue-900 sm:text-2xl">
            RCSIIT_Pvt.Ltd
          </p>
          <p className="text-sm font-medium text-gray-600">
            Online examination
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-center sm:mt-0 space-x-2">
        <h1 className="text-black font-medium text-base">Exam Name:</h1>{" "}
        <span className="font-medium text-gray-700">
          Three months Computer course
        </span>
      </div>
      <div className="mt-5 sm:mt-0">
        <div className="flex space-x-2">
          <h1 className="text-black font-medium text-base">Login ID:</h1>{" "}
          <span className="font-medium text-gray-700">A798OP07UY1231</span>
        </div>

        <div className="flex space-x-2">
          <h1 className="text-black font-medium text-base">Language: </h1>{" "}
          <span className="font-medium text-gray-700 float-left">English</span>
        </div>
      </div>
      <div className="mt-5 flex justify-center sm:mt-0">
        <div className="flex-shrink-0">
          <img
            className="mx-auto h-20 w-20 rounded"
            src={user.imageUrl}
            alt=""
          />
        </div>
        {/* <a
              href="#"
              className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View profile
            </a> */}
      </div>
    </div>
  );
};

export default Head;
