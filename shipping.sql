CREATE SCHEMA shipping_test;
USE shipping_test;

CREATE TABLE shippings(
	id INT AUTO_INCREMENT PRIMARY KEY,
    customer VARCHAR(100),
    descrip TEXT,
    status VARCHAR(10),
    origin_lat DECIMAL(11,8),
    origin_long DECIMAL(11,8),
    current_lat DECIMAL(11,8),
    current_long DECIMAL(11,8),
    end_lat DECIMAL(11,8),
    end_long DECIMAL(11,8),
    aprox_distance FLOAT,
    finish_at TIMESTAMP NULL
 );
 
