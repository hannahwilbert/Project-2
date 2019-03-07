CREATE DATABASE IF NOT EXISTS equiptments_db;
USE equiptments_db;

CREATE TABLE equiptments (
	id int NOT NULL AUTO_INCREMENT,
    equiptment_name varchar(255) NOT NULL,
    packed BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO equiptments (equiptment_name, packed) VALUES ('Microphone', FALSE);
INSERT INTO equiptments (equiptment_name, packed) VALUES ('Capo', FALSE);
INSERT INTO equiptments (equiptment_name, packed) VALUES ('Guitar Pick', FALSE);