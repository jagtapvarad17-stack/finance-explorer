import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Wallet from "../models/Wallet.js";

/* -----------------------------------------
   GENERATE JWT
------------------------------------------*/
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

/* -----------------------------------------
   REGISTER USER
------------------------------------------*/
export const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    // 1️⃣ Validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters"
      });
    }

    // 2️⃣ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword
    });

    // 5️⃣ Create wallet for user
    await Wallet.create({
      userId: user._id,
      balance: user.credits,
      transactions: [
        {
          type: "MODULE_REWARD",
          amount: user.credits,
          description: "Initial signup bonus"
        }
      ]
    });

    // 6️⃣ Generate token
    const token = generateToken(user._id);

    // 7️⃣ Response
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        credits: user.credits,
        rank: user.rank
      }
    });

  } catch (error) {
    next(error);
  }
};

/* -----------------------------------------
   LOGIN USER
------------------------------------------*/
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    // 2️⃣ Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // 3️⃣ Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // 4️⃣ Generate token
    const token = generateToken(user._id);

    // 5️⃣ Response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        credits: user.credits,
        rank: user.rank
      }
    });

  } catch (error) {
    next(error);
  }
};

/* -----------------------------------------
   GET USER PROFILE
------------------------------------------*/
export const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    next(error);
  }
};
