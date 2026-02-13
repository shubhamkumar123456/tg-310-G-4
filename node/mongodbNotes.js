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
    // let arr = [
    //     {name:"oppo", price:15000, rating:5,category:"smartphone"},
    //     {name:"realme", price:25000, rating:5,category:"smartphone"},
    //     {name:"xiomi", price:65000, rating:5,category:"smartphone"},
    //     {name:"samsung", price:10000, rating:5,category:"Tv"},
    //     {name:"samsung", price:95000, rating:5,category:"Tv"},
    // ]

// 5) get data from collection --> 
    // a) get all data present in collection folder --> db.collectionName.find()
    // b) get filtered Data --> db.collectionName.find({key : value})
    // c)get single data --> db.collectionName.findOne({key:value})

// 6) Update Data --> 
    // a) update single Data --> db.collectionName.updateOne({key:value} , {$set:{key:value}})

    // example-->db.products.updateOne({_id:ObjectId('698c9f2c3f7f0b8f213234a9')} , {$set:{name:"MI new"}}) 

    // b) update multiple Data --> db.products.updateMany({_id:ObjectId('698c9f2c3f7f0b8f213234a9')} , {$set:{name:"MI new"}}) 

//7) delete Data --> 
    // a)delete single Data --> db.collectionName.deleteOne({key:value})
    // example-->db.products.find({price:{$gt:35000}})

    //b) delete multiple Data -->db.collectionName.deleteMany({key:value})


//8) delete a collection (folder) --> db.collectionName.drop()

//9)delete a databse --> db.dropDatabase()

//10) comparision operator --> $gt, $lt, $gte, $lte, $et
// example-->db.products.find({price:{$gt:35000}})