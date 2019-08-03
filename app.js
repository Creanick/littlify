const express = require("express");
const devRun = require("./utils/devRun");
const app = express();

app.use((req, res) => {
  res.json({
    message: "Message"
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  devRun(() => {
    console.log("Server running");
  });
});
