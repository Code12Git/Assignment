import React from "react";
import { books } from "../dummyData";
import AddBookCard from "../Components/AddBookCard";
import AddBookModal from "../Components/Modals/AddBookModal";
const AddBook = () => {
  let counter = 0;
  return (
    <div className="p-10 md:p-10">
      <h1 className="text-purple-600 text-xl md:text-2xl font-bold mb-6">
        <AddBookModal />
      </h1>
      <div className="flex flex-col gap-10">
        {books.map((item) => (
          <AddBookCard key={item.id} AddbookDetails={item} number={++counter} />
        ))}
      </div>
    </div>
  );
};

export default AddBook;
