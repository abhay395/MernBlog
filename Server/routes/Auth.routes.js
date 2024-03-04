const express = require("express");
const {
  createUser,
  LoginUser,
  googleCallbackFunction,
  logout,
} = require("../controller/Auth.controller");
const passport = require("passport");
const { isAuth } = require("../service/com");
const router = express.Router();

router
  .post("/signup", createUser)
  .post("/login", passport.authenticate("local"), LoginUser)
  .get("/google", passport.authenticate("google", { scope: "profile" }))
  .get("/google/callback",passport.authenticate("google", {
      failureRedirect: "http://localhost:5173/login",
    }), googleCallbackFunction
  )
  .get("/github", passport.authenticate("github"))
  .get("/github/callback",passport.authenticate("github", {
      failureRedirect: "http://localhost:5173/login",
    }),googleCallbackFunction
  )
  .get("/logout", logout);

exports.router = router;
