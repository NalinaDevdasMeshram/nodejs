const Usermodel = require("../models/User.model");
const AuthService = require("../Services/AuthService");
const bcrypt = require("bcrypt");
const { data } = require("../userData");

async function authRegister(req, res) {
  const body = req.body;
  const { username, age, mobile, email, password } = body;
  try {
    const response = await AuthService.Register(
      username,
      age,
      mobile,
      email,
      password
    );
    res.status(200).json({
      message: "Register Successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "provide correct details",
      data: error,
    });
  }
}

async function authlogin(req, res) {
  const body = req.body;
  const { username, password } = body;
  try {
    const response = await AuthService.login(username, password);
    res.status(200).json({
      message: "Login successfully",
      data: response,
    });
  } catch (error) {
    res.status(401).json({
      message: "please provide correct Username & password",
      data: error,
    });
  }
}

module.exports = { authRegister, authlogin };
