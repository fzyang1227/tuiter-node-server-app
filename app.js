import express from 'express';
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
const USER = process.env.MONGO_WEBDEV_USER;
const PASS = process.env.MONGO_WEBDEV_PASS;
const CONNECT_STRING=`mongodb+srv://${USER}:${PASS}@cluster0.csrkvxi.mongodb.net/?retryWrites=true&w=majority`
|| 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECT_STRING);

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);