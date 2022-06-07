import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/Users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

//crud
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/add", createUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

//login & register
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
