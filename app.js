const express = require("express");
const devRun = require("./utils/devRun");
const morgan = require("morgan");
const app = express();

devRun(() => app.use(morgan("dev")));
app.use((req, res) => {
  res.json({
    message: "Message"
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  devRun(() => {
    console.log(`Server Running at ${PORT}`);
  });
});
