import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./database/db.js"
import { errorMiddleware } from "./error/error.js"
import reservationRouter from "./route/reservationRoute.js"

const App = express();

dotenv.config({ path: "./config/config.env" });

App.use(cors(
    {
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true
    }
))

// Middleware to parse JSON payloads
// Converts incoming JSON strings to JavaScript objects
// Example: { "name": "John" } in request body becomes req.body.name === "John"
App.use(express.json());

// Middleware to parse URL-encoded data (from HTML forms)
// extended: true allows nested objects, false allows only simple key-value pairs
// Example: name=John&email=john@example.com becomes req.body.name === "John"
App.use(express.urlencoded({ extended: true }));

App.use('/Api/reservation', reservationRouter)

db();

App.use(errorMiddleware);

export default App;