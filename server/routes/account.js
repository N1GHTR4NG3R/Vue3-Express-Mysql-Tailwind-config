const express = require("express");
const cc = require("kleur");
const db = require("../database/dbConnection");
const router = express.Router();

router.use((req, res, next) => {
  console.log(cc.yellow("Request made to /user Route"));
  next();
});

router.get("/", async (req, res) => {
  try {
    let sql = "SELECT G.guild_owner FROM Guilds G";
    db.query(sql, (err, results) => {
      if (err) throw err.message;
      res.json({
        User: results,
      });
      console.log(cc.green("Users retrieved!"));
    });
  } catch (err) {
    if (err) throw err.message;
  }
});

module.exports = router;
