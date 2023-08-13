import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import { bookDetail } from "../dummyData";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BookCard = ({ bookDetails, number, onDelete }) => {
  return (
    <div className="max-w-2xl  mt-48 md:mt-0  mx-auto bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-transform">
      <div className="p-3 w-full md:w-full  flex flex-col cursor-pointer md:flex-row items-center gap-24 justify-between">
        <div className="flex items-center space-x-8 md:space-x-16">
          <div className="flex items-center">
            <Checkbox {...label} />
            <p className="text-lg font-semibold">{number}</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-semibold">{bookDetails.book}</p>
            <p className="text-sm text-gray-600">Username</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="text-blue-500 hover:text-blue-700">
            <EditIcon />
          </button>
          <button onClick={() => onDelete(bookDetail.id)}>
            <DeleteIcon className="text-red-400 hover:text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
