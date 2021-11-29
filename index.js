const express = require("express");
const router  = require('./routes');
const app = express();

const port = process.env.PORT || 200;

app.set("view engine", "ejs");

//Routes MODIFICACIÓN
app.use("/",router);

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log(`App on Port ${port}`);
