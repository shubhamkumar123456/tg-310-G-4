// Go to sql work bench and create a database and table

// 1) create database ECOM

// 2)--  CREATE TABLE users (
// --     id INT PRIMARY KEY AUTO_INCREMENT,
// --     name VARCHAR(100),
// --     email VARCHAR(100) UNIQUE,
// --     password VARCHAR(255),
// --	   role enum("user",'admin') default 'user';
// --     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// --   );


// 3)-- CREATE TABLE products (
// --     id INT PRIMARY KEY AUTO_INCREMENT,
// --     name VARCHAR(150),
// --     price DECIMAL(10,2),
// --     stock INT,
// --     image VARCHAR(255),
// --     description text,
// --     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// -- );

// -- CREATE TABLE cart (
// --     id INT PRIMARY KEY AUTO_INCREMENT,
// --     user_id INT,
// --     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// -- );

// -- CREATE TABLE cart_items (
// --     id INT PRIMARY KEY AUTO_INCREMENT,
// --     cart_id INT,
// --     product_id INT,
// --     quantity INT,
// --     FOREIGN KEY (cart_id) REFERENCES cart(id) ON DELETE CASCADE,
// --     FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
// -- );


// -- CREATE TABLE orders (
// --     id INT PRIMARY KEY AUTO_INCREMENT,
// --     user_id INT,
// --     total DECIMAL(10,2),
// --     status VARCHAR(50),
// --     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// --     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// -- );


// -- CREATE TABLE order_items (
// --     id INT PRIMARY KEY AUTO_INCREMENT,
// --     order_id INT,
// --     product_id INT,
// --     quantity INT,
// --     FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
// --     FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
// -- );