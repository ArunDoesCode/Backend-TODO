import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";import cookieParser from "cookie-parser";
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
	path:"./data/config.env",
})

const Router = express.Router();

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: ["http://localhost:5173"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
		exposedHeaders: ["X-Custom-Header"],
	})
);



//using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);

app.get("/", (req, res) => {
	res.send("noice");
});

//using error middlware
app.use(errorMiddleWare);