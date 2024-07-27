
import express from "express";

import { signup ,login} from "../controller/user.controller.js"; 

const userRoutes = express.Router(); 

userRoutes.post("/signup", signup); 
userRoutes.post("/login", login); 

export default userRoutes;
