import express from "express";
import guestsRoutes from "./routes/guests.routes.js";
import roomsRoutes from "./routes/rooms.routes.js";
import hotelRoutes from "./routes/hotel.routes.js";
import hostingsRoutes from "./routes/hostings.routes.js";

import { PORT } from './config.js'

const app = express();

app.use(express.json());

app.use('/api', guestsRoutes);
app.use('/api', roomsRoutes);
app.use('/api', hotelRoutes);
app.use('/api', hostingsRoutes);

app.use((req, res, next) => {
    res.status(404).json({message: "Not found"});
});

app.listen(PORT);
console.log("Server on port ", PORT);
