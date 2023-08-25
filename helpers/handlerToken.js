import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//? Loading .env
dotenv.config();

//?Asing token
export const asignToken = async (user) => {
  try {
    return jwt.sign({ user }, process.env.JWT_KEY, { expiresIn: "2h" });
  } catch (error) {}
};

//?Verify token
export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    return null;
  }
};
