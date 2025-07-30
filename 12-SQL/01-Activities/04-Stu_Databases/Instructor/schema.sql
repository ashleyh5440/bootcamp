/* SELECT "TURTLE"; */

-- do not delete these dbs or folders
-- mysql, sys, performance_schema

-- Structured Query Language
DROP DATABASE IF EXISTS sample_db;

DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;

SELECT DATABASE();
