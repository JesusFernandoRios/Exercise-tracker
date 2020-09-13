// calling express
const express = require("express");
// calling mongoose
const mongoose = require("mongoose");


// setting up express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"))

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

require("./routes/htmlRoutes")(app)
// require("./routes/apiRoutes")(app)

// HTML Routes
// app.get("/exercise")

app.listen(3000, () => {
    console.log(`localhost:${PORT}`);
  });