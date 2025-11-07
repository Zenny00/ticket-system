-- Create the default tables for the ticket system application --

-- Create enum types -- 
CREATE TYPE status AS ENUM ('TODO', 'DOING', 'DONE');
CREATE TYPE rank AS ENUM ('RANK1', 'RANK2', 'RANK3', 'RANK4');

-- Create the user table if it does not already exist --
CREATE TABLE IF NOT EXISTS ticket_manager (
  user_id VARCHAR(255) NOT NULL,
  username VARCHAR(255),
  PRIMARY KEY (user_id)
);

-- Create tickets table if it does not already exist --
CREATE TABLE IF NOT EXISTS ticket (
  ticket_id VARCHAR(255) NOT NULL,
  created TIMESTAMP,
  due_date TIMESTAMP,
  title VARCHAR(255),
  content VARCHAR(1024),
  status status NOT NULL,
  rank rank NOT NULL,
  owner VARCHAR(255) REFERENCES ticket_manager (user_id),
  PRIMARY KEY (ticket_id)
);
