module.exports = req => {
  return `${req.protocol}://${req.headers.host}`;
};
