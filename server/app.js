const express = require('express');
const axios = require("axios");
const app = express();
const movies = {};

app.get("/", (req, res) => {

  res.status(200);
  if (movies[req.url] != null) {

    res.json(movies[req.url]);

  } else {

      axios.get("http://www.omdbapi.com" + req.url + "&apikey=8730e0e")
      .then(response => {

        movies[req.url] = response.data;
        res.json(response.data);

      }).catch((error) => {

        console.log(error);

      });
  };
});

module.exports = app;
