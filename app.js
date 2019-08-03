const express = require("express");
const morgan = require("morgan");
const app = express();

// devRun(() => app.use(morgan("dev")));
app.use((req, res) => {
  res.json({
    message: "Message"
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running");
});
