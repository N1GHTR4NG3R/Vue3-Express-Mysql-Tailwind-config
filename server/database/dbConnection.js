const mysql = require('mysql');
const cc = require('kleur');

const db = mysql.createConnection({
  host: "SomeHost",
  port: "somePort",
  user: "someUser",
  password: "somePassword",
  database: "someDatabase",
});

db.connect((err) => {
  if(err) throw err.message;
  console.log(cc.green('Database Connected!'));
})
