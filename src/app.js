import express from "express";
import cors from "cors";
import { productRouter } from "../routes/productRoute.js";
export const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({limit:"50mb"}));
app.use("/api/v1",productRouter)
app.get("/",(req,res)=>{
    res.send("Hello I am server");
})

