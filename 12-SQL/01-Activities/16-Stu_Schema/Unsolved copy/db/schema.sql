-- Write your schema here --
DROP DATABASE IF EXISTS gods_and_beasts_db;
CREATE DATABASE gods_and_beasts_db;

USE gods_and_beasts_db;

CREATE TABLE gods (
    name VARCHAR(30) NOT NULL
    id INT NOT NULL
    description VARCHAR(180) NOT NULL
    class VARCHAR(10) NOT NULL
    region VARCHAR(15) NOT NULL
    area VARCHAR(15) NULL
    myth_set VARCHAR(15) NOT NULL
    attack_points INT NOT NULL
    defend_points INT NOT NULL
);

CREATE TABLE beasts (
     name VARCHAR(30) NOT NULL
    id INT NOT NULL
    description VARCHAR(180) NOT NULL
    class VARCHAR(10) NOT NULL
    region VARCHAR(15) NOT NULL
    area VARCHAR(15) NULL
    myth_set VARCHAR(15) NOT NULL
    attack_points INT NOT NULL
    defend_points INT NOT NULL
);