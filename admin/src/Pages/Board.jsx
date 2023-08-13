import React from "react";
import { BoardDetails } from "../dummyData";
import BoardCard from "../Components/BoardCard";
import BoardModal from "../Components/Modals/BoardModal";
const Board = () => {
  let counter = 0;

  return (
    <div className="p-12 ">
      <h1 className="text-purple-600 text-2xl font-bold mb-10">
        <BoardModal />{" "}
      </h1>
      <div className="flex flex-col gap-10">
        {BoardDetails.map((item) => (
          <BoardCard key={item.id} user={item} number={++counter} />
        ))}
      </div>
    </div>
  );
};

export default Board;
