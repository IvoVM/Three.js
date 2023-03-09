//Imports
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

//Settings
const app = express();

//Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, "src")));

//Server
app.listen(3000);
