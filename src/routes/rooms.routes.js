import { Router } from "express";
import {
  getRooms,
  getRoom,
  postRoom,
  putRoom,
  deleteRoom,
  getCodesRooms
} from "../controllers/rooms.controller.js";

const router = Router();

router.get("/rooms", getRooms);

router.get("/rooms/code/:codRoom", getRoom);

router.post("/rooms", postRoom);

router.put("/rooms/:codRoom", putRoom);

router.delete("/rooms/:codRoom", deleteRoom);

router.get("/rooms/codes", getCodesRooms);

export default router;