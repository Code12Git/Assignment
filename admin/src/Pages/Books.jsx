import React from "react";
import { bookDetail } from "../dummyData";
import BookCard from "../Components/BookCard";
import BookModal from "../Components/Modals/BookModal";
const Books = () => {
  let counter = 0;
  return (
    <div className="p-10 md:p-10">
      <h1 className="text-purple-600 text-xl md:text-2xl font-bold mb-10">
        <BookModal />
      </h1>
      <div className="flex flex-col gap-14">
        {bookDetail.map((item, index) => (
          <BookCard key={item.id} bookDetails={item} number={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Books;
