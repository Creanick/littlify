module.exports = func => {
  process.env.NODE_ENV === "development" && func && func();
};
