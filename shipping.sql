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
 
 INSERT INTO shippings VALUES('Carlos','Entrega a Carlos','Entregado',-34.61315000,-58.37723000,-31.41330000,-64.18105000,-31.41350000,-64.18105000,0.022,'2021-07-31 12:18:06')