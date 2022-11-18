## Follow the sequence of applying condition, that is called aggregation. And after applying each condition a new set of data is formed.

[{1}, {2}, {3}]

* 1 - condition for whole dataset
* 2 - condition for the set of data left after condition 1
* 3 - condition for the set of data left after condition 2

db.orders.aggregate([{$limit: 2}])
## limit 2

db.orders.aggregate([{$sort: {price: 1}}])
## sort on basis of price

db.orders.aggregate([{$limit: 4}, {$sort: {price: 1}}])
## limit -> sort on basis of price

db.orders.aggregate([{$match: {size: 'small'}}])
## match small size

db.orders.aggregate([{$match: {size: 'small'}, {$match: {price: {$gt: 16}}}])
## match small size -> price > 16

db.orders.aggregate([{$group: {_id: '$size'}}])
## grouping orders by size, returns the groups

db.orders.aggregate([{$group: {_id: '$size', total: {$sum : "$price"}}}])
db.orders.aggregate([{$group: {_id: '$size', total: {$avg : "$price"}}}])
## grouping orders by size and add/avg prices in each group

db.orders.aggregate([{$match: {size: "medium"}}, {$group: {_id: "$name", total: {$sum: "$quantity"}}}])
## match medium size -> group of basis of name -> sum of quantity in each group

db.cities.aggregate([{$group: {_id: '$state', total: {$sum: "$pop"}}}, {$sort: {total: -1}}, {$limit: 1}])
## group all cities on the basis of state -> sum population of each state -> sort on basis of total population -> limit to 1