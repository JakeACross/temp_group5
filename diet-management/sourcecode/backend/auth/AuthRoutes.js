const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("./../config/default.json");
const jwt = require("jsonwebtoken");
const UserModel = require("./AuthModel");
const auth = require("./authMiddleware");

router.get("/", auth, (req, res) => {
  console.log(req.user);
  UserModel.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.json(user);
    });
});

router.post("/register", (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  // Validation
  if (!firstname || !lastname || !username || !password) {
    return res.status(400).json({
      message: "Please enter all the values",
    });
  }

  // Find if existing user

  UserModel.findOne({ username }).then((user) => {
    if (user)
      return res.status(400).json({
        message: "User already exists. Please try with a new username",
      });

    const newUser = new UserModel({
      firstname,
      lastname,
      username,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;

        newUser
          .save()
          .then((user) => {
            jwt.sign(
              {
                id: user._id,
              },
              config.jwt_secret_key,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token: token,
                  user: {
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                  },
                });
              }
            );
          })
          .catch({
            message:
              "There is an error in creating user.Please try after some time.",
          });
      });
    });
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please enter all values" });
  }

  UserModel.findOne({ username }).then((user) => {
    if (!user)
      return res
        .status(400)
        .json({ message: "There is no user found in our records" });

    bcrypt.compare(password, user.password, (err, success) => {
      if (!success)
        return res
          .status(400)
          .json({ message: "Please enter a valid password" });
      jwt.sign(
        {
          id: user._id,
        },
        config.jwt_secret_key,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token: token,
            user: user,
          });
        }
      );
    });
  });
});

module.exports = router;
