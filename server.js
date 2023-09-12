import {app} from "./app.js";
import { connectDB } from "./data/database.js";

try {
	connectDB();

} catch (error) {
	console.log(error);
}



app.listen(process.env.PORT, (req, res) => {
	console.log(`Server is Working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});