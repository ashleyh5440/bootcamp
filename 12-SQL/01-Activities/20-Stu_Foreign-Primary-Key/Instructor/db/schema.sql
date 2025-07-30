-- Write your Schema Here -- 
DROP DATABASE IF EXISTS customer_demo_db;
CREATE DATABASE customer_demo_db;

USE customer_demo_db;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customer_order(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NULL,
  order_details TEXT NOT NULL,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);