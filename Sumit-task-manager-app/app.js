const express = require("express");
const app = express();
require('dotenv').config()

const routes = require("./routes/task.route");
const connectDB = require("./db/connection");

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/tasks", routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
