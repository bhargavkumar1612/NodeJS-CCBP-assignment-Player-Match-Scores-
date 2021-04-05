const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
app.use(express.json());
const dbPath = path.join(__dirname, "cricketMatchDetails.db");
const initializeDbAndServer = async () => {
  try {
    await open({
      filename: dbPath,
      driver: sqlite3.driver,
    });
    app.listen(3000);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
};
initializeDbAndServer();
