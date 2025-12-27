import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./lib/auth.js";

const app = express();
const port = 8080;

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());

app.listen(port, () => {
    console.log(`Better Auth app listening on port ${port}`);
});