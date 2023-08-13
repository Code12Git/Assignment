import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LeftBar from "./Components/LeftBar/LeftBar";
import User from "./Pages/User";
import Board from "./Pages/Board";
import Class from "./Pages/Class";
import Books from "./Pages/Books";
import Publication from "./Pages/Publication";
import AddBook from "./Pages/AddBook";
import LessonPlan from "./Pages/LessonPlan";
import Login from "./Pages/Login";
import WorkinProgress from "./Pages/WorkinProgress";
import Completed from "./Pages/Completed";
import Navbar from "./Components/Navbar";

function App() {
  const location = useLocation();

  const excludeLeftBarPaths = ["/login"];

  const shouldDisplayLeftBar = !excludeLeftBarPaths.includes(location.pathname);

  return (
    <div className="flex">
      <div className="md:hidden">
        <Navbar />
      </div>
      {shouldDisplayLeftBar && <LeftBar />}
      <Routes>
        <Route exact path="/user" element={<User />} />
        <Route path="/board" element={<Board />} />
        <Route path="/class" element={<Class />} />
        <Route path="/books" element={<Books />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/bookname" element={<AddBook />} />
        <Route path="/lessonplan" element={<LessonPlan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workinprogress" element={<WorkinProgress />} />
        <Route path="completed" element={<Completed />} />
      </Routes>
    </div>
  );
}

export default App;
