import User from "../models/auth.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).send(filteredUsers);
  } catch (error) {
    console.log("getUsersForSideBar errors:- ", error.message);
    res.send({ error: "Internal Server Error." }).status(500);
  }
};
