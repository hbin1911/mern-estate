import express from "express";
import mongoose from "mongoose";
// import userRouter from "./routes/user"
import dotenv from "dotenv";
import  userRouter  from "./routes/user.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json())
app.use(cookieParser())

app.listen(3007, () => {
    console.log("Server is running on port 3007");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})