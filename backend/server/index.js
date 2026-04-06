require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const port = process.env.PORT || 4000;
const url = process.env.MONGO_URL;
const app = express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
    console.log("Db coonected successful");
};

app.use(
    cors({
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
});