import User from "../models/auth.model.js";
import bcrypt from "bcrypt";
import { generateTokenAndSetCookie } from "./../utils/generateToken.js";

export const signUpUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    // console.log(req.body);

    if (password !== confirmPassword) {
      return res.status(400).send("Password and Confirm Password not Matched.");
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).send("User Already Exists.");
    }

    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boysProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilepic: gender === "male" ? boysProfilepic : girlProfilepic,
    });

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).send({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilepic: newUser.profilepic,
    });
  } catch (error) {
    console.log("Error in Signup Controller:-- ", error);
    res.send(error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).send("Invalid Username or password");
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(201).send({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log("Error in Login Controller:-- ", error);
    res.send(error.message);
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).send("Logout Successfully.");
  } catch (error) {
    console.log("Error in Logout Controller:-- ", error);
    res.send(error.message);
  }
};
