import React from "react";
import { lessionplan } from "../dummyData";
import LessonPlanCard from "../Components/LessonPlanCard";
import LessonModal from "../Components/Modals/LessonPlan";
const LessonPlan = () => {
  let counter = 0;
  return (
    <div className="p-10 md:p-10">
      <h1 className="text-purple-600 text-xl md:text-2xl font-bold mb-10">
        <LessonModal />
      </h1>
      <div className="flex flex-col gap-10">
        {lessionplan.map((item, index) => (
          <LessonPlanCard key={item.id} lessionplan={item} number={++counter} />
        ))}
      </div>
    </div>
  );
};

export default LessonPlan;
