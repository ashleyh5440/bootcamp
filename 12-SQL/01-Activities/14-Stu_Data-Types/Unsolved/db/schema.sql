DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(60) NOT NULL,
  last_name VARCHAR(60) NOT NULL,
  value_card_member BOOLEAN NULL
);

/* 
id   first_name   last_name  value_card_member
1    Anthony      Bob        1
2    Opal         S.         1
3... */