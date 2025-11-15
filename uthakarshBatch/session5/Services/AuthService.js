const Usermodel = require("../models/User.model");
const bcrypt = require("bcrypt");

class AuthService {
  static async Register(username, age, mobile, email, password) {
    // create objwct - business logic
    const hashpassword = await this.encryptPassword(password);
    const userObj = new Usermodel({
      username,
      age,
      mobile,
      email,
      password: hashpassword,
    });

    // DB Call
    try {
      const response = await userObj.save();
      return response;
    } catch (error) {
      throw new Error("error:" + error);
    }
  }
  // bcrypt uses cpu intensive algorithm
  static async encryptPassword(planTextpassword) {
    const saltRounds = await bcrypt.genSalt(10); // how many rounds of hashing default 10
    const hashedPassword = await bcrypt.hash(planTextpassword, saltRounds);
    return hashedPassword;
  }

  static async login(username, password) {
    try {
      const user = await this.findUserByUserName(username);
      if (!user) {
        throw new Error("User not found");
      } else {
        const hashedPassword = user.password; //hash password
        const plainTextpassword = password; // plan text
        const isPasswordMatch = await bcrypt.compare(
          plainTextpassword,
          hashedPassword
        );
        if (isPasswordMatch) {
          return user;
        } else {
          throw new Error("password did not match");
        }
      }
    } catch (error) {
      throw new Error("error:", error);
    }
  }
  static async findUserByUserName(username) {
    try {
      const user = await Usermodel.findOne({ username });
      return user;
    } catch (error) {
      return null;
    }
  }
}

module.exports = AuthService;
