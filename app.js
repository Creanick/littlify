const express = require("express");
const devRun = require("./utils/devRun");
const app = express();

//enable logger
devRun(() => {
  const morgan = require("morgan");
  app.use(morgan("dev"));
});

app.use((req, res) => {
  res.json({
    message: "Message",
    owner: process.env.OWNER || "Unknown"
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  devRun(() => {
    console.log("Server running");
  });
});
