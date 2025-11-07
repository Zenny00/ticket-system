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

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Homepage route, return the list of users
app.get("/", async (req, res) => {
  const USER_FIELDS = "user_id, username";

  // Request connection from the pool
  let connection = await pool.connect();

  // Retrieve data from user (ticket_manager) table
  let users = await connection.query(`SELECT ${USER_FIELDS} FROM ticket_manager`);

  // Release connection back to pool
  connection.release();
  
  // Return user data as JSON
  res.send(users?.rows || []);
});

