# node-redis-cache

The node-redis-cache example consists on the very basics of how to make cache with Redis on Nodejs. 

Here we can see how caching improves the speed when retrieving data to the user.

## Installation
Install dependencies
```bash
npm i 
```
This repo already has redis installed but if you need to install in one of your project use check: [Redis Documentation](https://redis.io/topics/quickstart)

## Getting Started

Run redis server inside of the folder when installed redis
```bash
 cd redis-stable
 redis-server
```

Run node server
```bash
 node server.js
```
When both server are running open postman or some similar program and do a get request
```bash
localhost:3010/data?search=comments
```
### Request Options:
```bash

posts:	100 results

comments: 500 results

albums:	100 results

photos:	5000 results

todos:	200 results

users:	10 results
```

Use the request above to clean cache
```bash
localhost:3010/clean
```
Is interesting to see how caching the results improve the speed retrieving the data to the user


## License
[MIT](https://choosealicense.com/licenses/mit/)
