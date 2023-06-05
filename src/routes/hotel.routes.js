import { Router } from "express";
import { getHotel, postHotel, putHotel, deleteHotel, getCodeHotel } from "../controllers/hotel.controller.js";

const router = Router();

router.get("/hotel", getHotel);

router.post("/hotel", postHotel);

router.put("/hotel", putHotel);

router.delete("/hotel", deleteHotel);

router.get("/hotel/codes", getCodeHotel);

export default router;