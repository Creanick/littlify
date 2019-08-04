module.exports = any => {
  if (process.env.NODE_ENV !== "production") {
    console.log(any);
  }
};
