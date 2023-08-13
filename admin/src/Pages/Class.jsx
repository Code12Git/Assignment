import React from "react";
import { classDetails } from "../dummyData";
import ClassCard from "../Components/ClassCard";
import ClassModal from "../Components/Modals/ClassModal";
const Class = () => {
  let counter = 0;
  return (
    <div className="p-12 ">
      <h1 className="text-purple-600 mb-10  text-2xl font-bold">
        <ClassModal />{" "}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-14">
        {classDetails.map((item) => (
          <ClassCard key={item.id} classDetails={item} number={++counter} />
        ))}
      </div>
    </div>
  );
};

export default Class;
