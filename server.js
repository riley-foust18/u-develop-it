const mysql = require("mysql2");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username
    user: "root",
    // Your MySQL password
    password: "05012020CandR",
    database: "election"
  },
  console.log("Connected to the election database.")
);

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
              VALUES (?,?,?,?)`;
const params = [1, "Ronald", "Firbank", 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// Default response for any other request (Not found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});