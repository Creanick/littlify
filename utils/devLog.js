module.exports = any => {
  if (process.env.NODE_ENV === "development") {
    console.log(any);
  }
};
