/* CRUD Operations =========================================================================
// to check the collection
show collections

// create db
use animalShelter


// insert only one
db.dogs.insertOne({name: "Charlie", age: 3, breed: "corgi", catFriendly: true})

// insert
db.dogs.insert([{name: "Wyatt", breed: "Golden"}, {name: "Tonya", breed: "chihuahah"}])



// to find all the object int a aprticular db
db.dogs.find() ### return cursor



// find all the objects based on some condition
db.dogs.find({breed: "corgi"})



// find exactly one object based on some condition
db.dogs.findOne({breed: "corgi"})




// set 
db.dogs.updtaeOne({name: "Charlie"}, {%set: {age : 4, breed: "Lab"}})
// it we try to update a non existing key-value pair , then db we will create a new 
// one with the updated value

db.cats.updateOne({age: 6}, {$set: {age: 7}, $currentdate: {lastChanged: true}})





// delete with some condition
db.cats.deleteOne({name: "Blue Steele"})
db.cats.deleteMany({name: "Blue Steele"})





// delete all
db.dogs.deleteMany({})

===============================================================================================*/







/* Additional Mongo operator ============================================================================

db.dogs.find({"personality.childFriendly": true, age: 12})




db.dogs.find({age: {$gt: 8}})
db.dogs.find({age: {$gte: 8}})
db.dogs.find({age: {$lt: 8}})



db.dogs.find({breed: {$in: ["Mutt", "Corgi"]}, age: {$lt: 10}})
db.dogs.find({breed: {$nin: ["Mutt", "Corgi"]}, age: {$lt: 10}})



db.dogs.find({$or: [{"personality.catFriendly": true}, {age: {$lt : 2}}]})



========================================================================================================*/






