DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

\c user_db;

CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  User_Name VARCHAR(30) NOT NULL,
  Email_Address VARCHAR(30) NOT NULL,
  Password VARCHAR(30) NOT NULL,
);






DROP DATABASE IF EXISTS movieuser_db;
CREATE DATABASE movieuser_db;

\c movieuser_db;

-- CREATE TABLE user (
--   id SERIAL PRIMARY KEY,
--   Movie VARCHAR(30) NOT NULL,
--   Email_Address VARCHAR(30) NOT NULL,
--   Password VARCHAR(30) NOT NULL,
-- );