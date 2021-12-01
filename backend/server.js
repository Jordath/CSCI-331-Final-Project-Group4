import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"
import mongoose from "mongoose"

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://BMarceau:WinterIsComing1@cluster0.1i945.mongodb.net/recDB?retryWrites=true&w=majority');

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
}

app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", restaurants);
app.use("*", (req, res) => res.status(404).json({error: "not found"}));

export default app 