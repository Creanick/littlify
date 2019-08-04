const express = require("express");
const devRun = require("./utils/devRun");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const testRouter = require("./routes/test");
const urlRouter = require("./routes/url");
const app = express();

app.use(bodyParser.json());
//enable logger
devRun(() => {
  const morgan = require("morgan");
  app.use(morgan("dev"));
});

//routers
// app.use("/test", testRouter);
app.use(urlRouter);

app.use((req, res, next) => {
  const error = new Error();
  error.status = 404;
  error.message = "Cannot find endpoint";
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong"
  });
});

//server and database setup
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${
  process.env.DB_PASSWORD
}@cluster0-2hvb3.mongodb.net/${
  process.env.DB_NAME
}?retryWrites=true&w=majority`;

mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(data => {
    devRun(() => console.log(`Database connected DB: ${process.env.DB_NAME}`));
  })
  .catch(err => {
    devRun(() => {
      if (err) console.log(err);
    });
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  devRun(() => {
    console.log("Server running");
  });
});
