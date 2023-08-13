import express from "express";
import dotenv from "dotenv";
import connection from "./db/conn.js";
import cors from "cors";
import authRoute from "./routes/auth.js";

//Fetching dotenv file
dotenv.config({ path: "./config.env" });

//App router
const app = express();

//Assigning port
const PORT = process.env.PORT;

//Database
connection();

//Middlewares

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoute);

//Test port
app.get("/", (req, res) => {
  res.send("Test Route");
});

//Key
app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

//Listening Port
app.listen(PORT, () => {
  console.log(`Server is up on PORT: ${PORT}`);
});
