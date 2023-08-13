import React from "react";
import { lessionplan } from "../dummyData";
import WorkinProgressCard from "../Components/WorkinProgressCard";
const WorkinProgress = () => {
  let counter = 0;
  return (
    <div className="p-10 md:p-10">
      <div className="flex flex-col gap-10">
        {lessionplan.map((item, index) => (
          <WorkinProgressCard
            key={item.id}
            workplan={item}
            number={++counter}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkinProgress;
