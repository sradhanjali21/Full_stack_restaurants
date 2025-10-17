import express from "express";
import send_reservation from "../controller/reservation.js";
const router = express.Router();

router.post("/sendReservation", send_reservation);

export default router;