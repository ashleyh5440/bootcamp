-- checks to see if books_db exists, then drops it if it does.
DROP DATABASE IF EXISTS books_db;
-- creates a folder called books_db (aka database)
CREATE DATABASE books_db;

-- goes into the books_db database (folder)
USE books_db;

-- create a table file called biographies
CREATE TABLE biographies (
  -- this section defines the structure
  
  -- specifies a column name id of type integer and it is required
  id INT NOT NULL,
  -- specifies a column name name of type varchar (100 characters or less)
  -- and cannot be null (in other words required)
  name VARCHAR(100) NOT NULL
);

