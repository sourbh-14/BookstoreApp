import express, { Router } from "express"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import bookRoute from "./route/book.route.js"; 
import cors from "cors"; 
import userRoutes from "./route/user.route.js";


const app = express(); 

app.use(cors()); 
app.use(express.json()); 


dotenv.config(); 

const PORT=process.env.PORT || 4000;
const MongoURL=process.env.MongoDBURI; 
// connect to mongoDB
try {
mongoose.connect(MongoURL); 
console.log("databasess connected successfully"); 
}catch(error) {
console.log("error",error); 
}
// defining routes
app.use("/book",bookRoute); 
app.use("/user",userRoutes); 
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`); 
}); 
 
