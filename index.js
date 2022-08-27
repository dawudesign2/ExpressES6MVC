import express , { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Root from "./src/routes.js";
import dotenv from 'dotenv';
dotenv.config();

const Port = process.env.PORT;
const app = express();

app.use(json())
   .use(cors())
   .use(cookieParser())
   .use(urlencoded({ extended: true }))
   .use(Root);


app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}`);
});




