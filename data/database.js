import mongoose from "mongoose";

export const connectDB = ()=> {
    mongoose.connect(process.env.MONGO_URI, {
		dbName: "backendapi",
		useNewUrlParser: true, // Use the new URL parser (prior to Mongoose 6)
		useUnifiedTopology: true,
		})
.then(console.log("Database Connected"))
.catch((e) => console.log(e));
};
