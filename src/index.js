const express = require("express");
const router = require("./routes/courses.routes.js");

const app = express();

app.use(express.json());
app.use("/courses", router);

app.listen(3000, () => console.log("Server running..."));
