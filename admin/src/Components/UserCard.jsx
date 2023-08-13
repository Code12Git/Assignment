import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const UserCard = ({ user, number, onDelete }) => {
  return (
    <div className="max-w-2xl  mt-40 md:mt-0    mx-auto bg-white  shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-transform">
      <div className="p-6 w-full   md:w-full  flex flex-col cursor-pointer md:flex-row items-center gap-24 justify-between">
        <div className="flex items-center  space-x-8 md:space-x-16">
          <div className="flex items-center">
            <Checkbox {...label} />
            <p className="text-lg font-semibold">{number}</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-semibold">{user.username}</p>
            <p className="text-sm text-gray-600">Username</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-semibold">{user.userid}</p>
            <p className="text-sm text-gray-600">User ID</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="text-blue-500 hover:text-blue-700">
            <EditIcon />
          </button>
          <button onClick={() => onDelete(user.id)}>
            <DeleteIcon className="text-red-400 hover:text-red-600" />
          </button>
          <button>
            <img src="/assets/refresh.png" className="w-6" alt="refresh" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
