import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const AddBookCard = ({ AddbookDetails, number }) => {
  return (
    <div className="max-w-2xl  mt-48 md:mt-0  mx-auto bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-transform">
      <div className="p-4 md:p-6 w-full md:w-full flex flex-col cursor-pointer md:flex-row items-center gap-4 md:gap-6 justify-between">
        <div className="flex items-center space-x-4 md:space-x-8 flex-grow">
          <div className="flex items-center">
            <Checkbox {...label} />
            <p className="text-lg font-semibold">{number}</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-semibold">{AddbookDetails.bookname}</p>
            <p className="text-sm text-gray-600">Book name</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-semibold">{AddbookDetails.class}</p>
            <p className="text-sm text-gray-600">Class</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-semibold">{AddbookDetails.bookstream}</p>
            <p className="text-sm text-gray-600">Book stream</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-semibold">{AddbookDetails.publisher}</p>
            <p className="text-sm text-gray-600">Publisher</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <button className="text-blue-500 hover:text-blue-700">
            <EditIcon />
          </button>
          <button>
            <DeleteIcon className="text-red-400 hover:text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookCard;
