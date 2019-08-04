module.exports = req => {
  return `${req.secure ? "https" : "http"}://${req.headers.host}`;
};
