// TODO: Import express
const express = require("express")

// TODO: Import 'terms.json' file
const termsData = require("./terms.json"); //remember ./ for files you already have
const PORT = 3001;

// TODO: Initialize app variable
const app = express(); //app variable, represents our server

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api/', (req, res) => {              //'/api/' is just the path the readme wanted 
  return res.json(termsData)
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


//steps
//install node, npm install
//import express
//create app variable
//run node server to see if everything is connected
//import terms.json
//create the route, do node server again
//in the browser, add /api/ to end of the URL to add the path. Browser automatically has the method
//the content you see lives in the terms.json file
