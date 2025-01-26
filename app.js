const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
const port = process.env.PORT;

const indexRouter = require('./routes/index')
const newRouter = require('./routes/new')

app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static("./public"));



// app.get("/", (req, res) => res.render("index"));
app.use("/",indexRouter)
app.use("/new",newRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
