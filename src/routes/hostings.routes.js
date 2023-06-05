import { Router } from "express";
import { getHostings, getHosting, postHosting, putHosting, deleteHosting, getCodesHosting } from "../controllers/hostings.controller.js";

const router = Router();

router.get('/hostings', getHostings);

router.get('/hostings/:codHosting', getHosting);

router.post('/hostings', postHosting);

router.put('/hostings/:codHosting', putHosting);

router.delete('/hostings/:codHosting', deleteHosting);

router.get('/hostings/codes', getCodesHosting);

export default router;
