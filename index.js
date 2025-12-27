import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./lib/auth.js";

const app = express();
const port = 8080;

app.use((req, res, next) => {
  if (req.url.startsWith("/api/auth")) {
    console.log("🟣 BETTER-AUTH ROUTE HIT:", req.method, req.url);
    console.log("Query Params:", req.query);
    console.log("Cookies from App/Google:", req.headers.cookie);
  }
  next();
});


app.all('/api/auth/{*any}', toNodeHandler(auth));
console.log('hitting server');


app.use(express.json());

app.listen(port, () => {
    console.log(`Better Auth app listening on port ${port}`);
});