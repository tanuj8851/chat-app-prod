import jwt from "jsonwebtoken";
import User from "../models/auth.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "UnAuthorized - No Token Provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ error: "UnAuthorized - No Token Provided." });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User not Found." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(`Error in ProtectRoute Middleware:- `, error.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
};
