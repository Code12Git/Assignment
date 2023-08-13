import React, { useState } from "react";
import { userDetails } from "../dummyData";
import UserCard from "../Components/UserCard";
import UserModal from "../Components/Modals/UserModal";
const User = () => {
  let counter = 0;

  return (
    <div className="p-12">
      <h1 className="text-purple-600 text-2xl font-bold mb-10">
        <UserModal />
      </h1>
      <div className="flex flex-col gap-6 ">
        {userDetails.map((item) => (
          <UserCard key={item.id} user={item} number={++counter} />
        ))}
      </div>
    </div>
  );
};

export default User;
