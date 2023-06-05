import { Router } from "express";
import {
  getGuests,
  postGuests,
  putGuests,
  deleteGuests,
  getGuest,
  getIdsGuests
} from "../controllers/guests.controller.js";

const router = Router();

router.get("/guests", getGuests);

router.get("/guests/id/:idGuest", getGuest);

router.post("/guests", postGuests);

router.put("/guests/:idGuest", putGuests);

router.delete("/guests/:idGuest", deleteGuests);

router.get("/guests/ids", getIdsGuests);

export default router;
