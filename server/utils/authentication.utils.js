const isAuthenticated = (req, user) => {
  let authenticated = false
  if (req.session.user.userId !== userId) {
    authenticated = true;
  }
  return authenticated
};

module.exports = {
  isAuthenticated: isAuthenticated
};
