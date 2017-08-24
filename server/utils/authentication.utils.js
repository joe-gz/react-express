const authenticatedUser = (req, user) => {
  let authenticated = false
  console.log(req.session.user);
  if (req.session.user.userId !== user.userId) {
    authenticated = true;
  }
  console.log(authenticated);
  return authenticated
};

const isSignedInUser = (req) => {
  let authenticated = false
  console.log(req.session.user);
  if (req.session.user.userId) {
    authenticated = true;
  }
  console.log(authenticated);
  return authenticated
};

module.exports = {
  isAuthenticated: isAuthenticated,
  isSignedInUser: isSignedInUser
};
