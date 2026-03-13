const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"Shubham@123",
    database:'ECOM'
})
 db.connect((err)=>{
    if(err){
        console.log("DB ERROR",err)
    }
    else{
        console.log('MY Sql Connected');
    }
})

module.exports = db;



// method 2

// const mysql = require('mysql2/promise');

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "Shubham@123",
//     database: "ecommerce_trial",
//     waitForConnections: true,
//     connectionLimit: 10
// });

// Test connection
// async function checkDB() {
//     try {
//         const conn = await db.getConnection();
//         console.log("MySQL Connected");
//         conn.release();
//     } catch (err) {
//         console.log("DB ERROR:", err.message);
//     }
// }

// checkDB();

// module.exports = db;
