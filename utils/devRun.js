module.exports = func => {
  process.env.NODE_ENV !== "production" && func && func();
};
