import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

const { Pool } = pg;
const app = express();

/**
 * Function for establishing a connection pool with the database
 *
 */
async function establishDatabaseConnectionPool(user, password, host, database, port) {
  const pool = new Pool({
    user: user,
    password: password,
    host: host,
    database: database,
    port: port,
  });

  return pool;
}

// Setup cross origin resource sharing to allow requests to be made from our client to the server
app.use(cors());

let pool = await establishDatabaseConnectionPool("ticketmanager", "placeholder", "db", "ticketsystem", 5432);
let connection = await pool.connect();
let query = await connection.query('SELECT * FROM users');

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Homepage route
app.get("/", (req, res) => {
  
  console.log(query);

  console.log("Connection established with DB!");
  res.send("Hello from the server!!");

});

