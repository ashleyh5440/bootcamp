DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;
/* seed instructors first because it is a reference */
CREATE TABLE instructors (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id) 
  /* instructors table has a related column called id, and it should match id records using instructor_id in this courses table */
  ON DELETE SET NULL
);
