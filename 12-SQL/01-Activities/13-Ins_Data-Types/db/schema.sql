DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
  /* integer */
  id INT NOT NULL,
  /* string of max lenght of 30 */
  course_title VARCHAR(30) NOT NULL,
  /* very very large string */
  course_description TEXT NOT NULL,
  /* boolean 0(false)/1(true) */
  active BOOLEAN NOT NULL,
  /* Dec 11, 2023 7:51PM */
  /* 2023-12-11 07:51:00*** */
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
