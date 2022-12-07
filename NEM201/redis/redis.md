key-value db examples:

* const age = true;
* localStorage.setItem('age', JSON.stringify([]));
* JSON.parse(localStorage.getItem('age'));

age = 10
* set age 10
* get age

## Properties of redis:
* in-memory database -> RAM

## Advantages
- speed -> low latency, high throughput
- cheaper
- easy

## Disadvantages
- volatile
- queries are not powerful as other dbs
- important to know key

`cache - least recently used data`

## Redis commands
```
let age = 10, name = 'masai';
```
- SET age 10
- GET age 
- DECR age
- INCR age
- DECBY age 1
- INCBY age 10
- SET name masai
- APPEND name school
- MSET salary 1000 ismarried false
- GET salary
- GET ismarried

```
const databases = ['mongodb', 'postgres', 'redis']
```

- RPUSH databases mongodb postgres redis
- LRANGE databases 0 -1
- DEL age
- LPOS databases redis
- LPUSH databases oracle

```
const user1 = {
    name: "john",
    age: 10,
    salary: 100
}
```

- HSET user1 name john age 10 salary 100
- HGETALL user1

> ioredis package to use redis