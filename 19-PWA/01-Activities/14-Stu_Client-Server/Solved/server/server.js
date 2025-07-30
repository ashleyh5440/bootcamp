const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
// express.static connects the dist folder as a publicly accessible (online) folder
// json and urlencoded do body parsing for my requests
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires HTML route
// connects the homepage to an html file
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
