import React from "react";
import CompletedCard from "../Components/CompletedCard";
import { lessionplan } from "../dummyData";
const Completed = () => {
  let counter = 0;
  return (
    <div className="p-10 md:p-10">
      <div className="flex flex-col gap-10">
        {lessionplan.map((item, index) => (
          <CompletedCard key={item.id} complete={item} number={++counter} />
        ))}
      </div>
    </div>
  );
};

export default Completed;
