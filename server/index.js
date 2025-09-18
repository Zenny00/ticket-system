import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

const { Client } = pg;
const app = express();

/**
 * Function for establishing a connection with the database
 *
 */
async function establishDatabaseConnection(user, host, database, password, port) {
  const client = new Client({
    user: user,
    host: host,
    database: database,
    password: password,
    port: port,
  });
  await client.connect();
}

// Setup cross origin resource sharing to allow requests to be made from our client to the server
app.use(cors());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Homepage route
app.get("/", (req, res) => {
  res.send("Hello from the server!!");
});

// establishDatabaseConnection("postgres", "db", "postgres", "password", 5432);
