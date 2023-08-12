const { User } = require('../models/user');
const { HttpError, ctrlWrapper } = require('../helpers');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use")
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({...req.body, password: hashPassword});

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  })
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(400, "Email or password invalid");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(400, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  }

  const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "23h"})

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    }
  })
}

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
}