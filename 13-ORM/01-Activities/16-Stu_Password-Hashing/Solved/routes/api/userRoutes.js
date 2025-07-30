const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// Added comments describing the functionality of this `login` route
// post here is to make sure the login info isn't part of the url
router.post('/login', async (req, res) => {
  try {
    // we search the DB for a user with the provided email
    // email here is being used as the filter
    const userData = await User.findOne({ where: { email: req.body.email } });
    // userData will be null (falsy) if there is no user found
    if (!userData) {
      // the error message shouldn't specify if the login failed because of wrong email or password
      res.status(404).json({ message: 'Login failed. Please try again!' });
      // end the route function
      return;
    }
    // use `bcrypt.compare()` to compare the user provided password and the hashed password (in db)
    const validPassword = await bcrypt.compare(
      req.body.password, // comes from the login form
      userData.password // this is from database, still encrypted
    );
    // if they do not match, return error message
    if (!validPassword) { // (!false) => (true)
      // send an error message
      res.status(400).json({ message: 'Login failed. Please try again!' });
      // end the route function
      return;
    }
    // if they do match, return success message
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
