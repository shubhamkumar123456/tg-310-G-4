// Mongodb  --> it is a no sql database where data is stored in JSON format
// downlaod mongodb -->https://www.mongodb.com/try/download/community

// mongodb commands --> CRUD

//1) view all database  --> show dbs

//2) to switch any database or create a new Database -->  use DatabaseName

//3) create a collection inside Database --> db.createCollection('collectionName')

//4) insert data inside collection --> 
    // a) insert single Data --> db.collectionName.insertOne({key:value})
        // example --> db.users.insertOne({name:"one",email:"one@gmail.com"})

    // b) multiple data --> db.collectionName.insertMany([{key:value}, {key:value}])

    // example --> db.products.insertMany([
    //     {name:"iphone", price:45000, rating:5},
    //     {name:"MI", price:45000, rating:5},
    //     {name:"samsung", price:45000, rating:5},
    // ])



    let arr = [
        {name:"iphone", price:45000, rating:5},
        {name:"MI", price:45000, rating:5},
        {name:"samsung", price:45000, rating:5},
    ]