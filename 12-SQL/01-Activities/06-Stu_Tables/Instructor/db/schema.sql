DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

-- Add biography table --
-- * It's done when a new table `biographies` has been created and includes two columns `id` and `name`.
CREATE TABLE biographies (
  -- * It's done when the `id` column has a data type of `INT` and the `name` column has a data type of `VARCHAR(100)`. 
  id INT NOT NULL, -- NOT NULL -> (required) / NULL -> (optional)

  name VARCHAR(100) NOT NULL
);

INSERT INTO biographies ( id, name ) 
VALUES ( 1, "James Bu Cannon" );

SELECT * FROM biographies;

DESCRIBE biographies;

SHOW TABLES;
