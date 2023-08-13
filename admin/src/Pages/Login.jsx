import React, { useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [isUserLogin, setIsUserLogin] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsUserLogin(!isUserLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", {
        userid,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      res.data && navigate("/user");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">
          <span className="font-bold">School</span>
          <span className="text-gray-800">Pen</span>
        </h1>
        <div className="mt-8">
          <div className="flex border-gray-600 border rounded-3xl">
            <h1
              className={`text-2xl font-semibold w-52 items-center flex justify-center p-2 rounded-3xl ${
                isUserLogin ? "border-gray" : "bg-blue-600"
              }`}
              onClick={handleToggle}
            >
              <span className={isUserLogin ? "text-slate-500" : "text-white"}>
                Admin
              </span>
            </h1>
            <h1
              className={`text-2xl font-semibold w-44 items-center flex justify-center p-2 rounded-3xl ${
                isUserLogin ? "bg-blue-600" : "border-gray"
              }`}
              onClick={handleToggle}
            >
              <span className={isUserLogin ? "text-white" : "text-slate-500"}>
                User
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            <input
              type="text"
              placeholder="User Id"
              name="userid"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              className="rounded-3xl indent-4 font-bold p-3 w-96 border-gray-300 border"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-3xl indent-4 p-3 font-bold w-96 border-gray-300 border"
            />
            <button
              onClick={handleSubmit}
              className="p-3 font-bold w-52 hover:bg-blue-500 rounded-3xl m-auto bg-blue-400 text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
