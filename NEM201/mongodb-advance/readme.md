db.heros.find({metadata : {favouriteColor: 'red', age: 44}})

db.heros.find({metadata : {age: 44, favouriteColor: 'red'}})

 ## both are different queries because sequence matter in mongodb and exact match is required

db.heros.find({"metadata.favouriteColor": 'red'})

## dot notation is to enter inside a document

db.heros.find({"metadata.age": {$lt: 50}})

## heros with age < 50

db.heros.find({powers: ['intelligence', 'money']})

## heros with intelligence and money

db.heros.find({powers: {$in: ['intelligence']}})
db.heros.find({powers: 'intelligence'}) -> will be checked in the entire array

## both operations are same

db.heros.find({powers: {$all: ['money', 'intelligence']}})

## doesn't care about order should have money and intelligence

db.heros.find({'villains.name': 'Hela'})

## heros with villains name as hela

db.heros.find({}, {name: 1, health: 1})

## projection
## inclusion = 1, exclusion = 0