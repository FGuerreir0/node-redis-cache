const express = require("express");
const axios = require("axios");
const redis = require("redis");
const app = express();


/*-------------- SETTING UP REDIS ---------------------*/
const redisPort = 6379 //DEFAULT PORT
const client = redis.createClient(redisPort);

client.on("error", (err) => {
    console.log(err);
});
/*-----------------------------------------------------*/
app.get("/clean", async (req,res) => {
try{
  client.flushall(function (err, succeeded) {
    res.send({message: "Cache was cleaned"})
  })
}catch(err) {
        res.status(500).send({message: err.message});
    }

});

app.get("/data", async (req, res) => {
  const searchWord = req.query.search;
  try {
      client.get(searchWord, async (err, results) => {
        try{
          if(results) {
            res.status(200).send({
                data: JSON.parse(results),
                message: "Data retrieved from the cache"
            });
        } else {
      const searchResult = await axios.get(`https://jsonplaceholder.typicode.com/${searchWord}`);
      client.setex(searchWord, 600,JSON.stringify(searchResult.data));
      res.status(200).send({
        error: false,
        message: `Miss on cache, data for ${searchWord} from the server`,
        data: searchResult.data
      });	
        }
      }catch(err) {
        res.status(500).send({message: err.message});
    }
      });
  } catch(err) {
      res.status(500).send({message: err.message});
  }
});

app.listen(3010, () => {
    console.log("App has started on port 3010...");
});