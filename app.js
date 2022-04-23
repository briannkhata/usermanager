const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const session = require("express-session");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//template setup
app.use(express.static("public"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
  })
);

//db connection
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected as ID " + connection.threadId);
});

const routes = require("./server/routes/user");
app.use("/", routes);
app.listen(port, () => console.log("Listening on port ${port}"));
