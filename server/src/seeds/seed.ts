

import db from "../config/connection.js";
import { Question } from "../models/index.js";
import cleanDB from "./cleanDb.js";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Build the absolute path to your JSON file
const filePath = path.join(__dirname, "pythonQuestions.json");

// ✅ Read and parse the JSON
const questionData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

try {
  await db();
  await cleanDB();

  await Question.insertMany(questionData);

  console.log("Seeding completed successfully!");
  process.exit(0);
} catch (error) {
  console.error("Error seeding database:", error);
  process.exit(1);
}