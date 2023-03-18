import express from "express";
import {
  addAdmin,
  adminLogin,
  getAdminById,
  getAdmins,
} from "../controllers/admin-controller";

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/", getAdmins);
adminRouter.get("/:id", getAdminById);

export default adminRouter;
