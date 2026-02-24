// Sql --> It is a structured query language . it is used to manage relational database. unlike mongodb mongodb it stores data in table form(row and comlumn)

// commands and queries --> 

// 1)Database commands --> 
    // a) view all database --> show databasesql
    // b) switch to any database --> use databaseName
    // c) create a new database --> create database databaseName

// 2) create table  --> 
    // create table tableName(
    //     columnName dataType,
    //     columnName dataType,
    //     columnName dataType,
    // )

    // example --> 
    // create table users(
    //     id int auto_increment primary key,
    //     name varChar(120) not null,
    //     email varchar(150) not null unique,
    //     password varchar(200) not null,
    //     create_at timestamp default current_timestamp
    // );

// 3)Insert Data inside table -->
    // insert into tableName(columnName1, columnName2)
    // values (value1, value1)

    // example --> 
    // insert into users (name, email, password)
    // values 
    // ('john', 'john@gmail.com', '1234567'),
    // ('nick', 'nick@gmail.com', '1234567')


// 4)Read Data --> 
    // a) read all data -->
    //  select * from tableName ;

    //b) get sepecific column data  -->
        // select columnName1, columnName2 from tableName
        // select name , email from users

    // c)get data using condition  -->
        // select * from tablename where columnName = "value"
        // example --> 
        // select *from users where email = "john@gmail.com"
        // select * from users where age > 30
        // select * from users where age between 30 and 50
        // select * from users where age != 50

//5) update Data  --> 
    // update tableName set columnName = "value" where columnName = "value"
    // example -->
    // update users set name ="nick new" where id = 2
    // update users set city = 'USA' where age > 40

//6)Delete Data --> 
    // delete from tableName where columnName = "value"
    // example --> 
    // delete from users where id = 2

//7) delete table --> 
    // drop table tableName

//8) delete database --> 
    // drop database databaseName

    
