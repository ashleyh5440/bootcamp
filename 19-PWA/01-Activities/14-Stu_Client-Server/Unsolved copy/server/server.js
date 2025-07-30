const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comment on role of code below
//express.static connects the dist folder as a publically accessible (online) folder
//basically the front end is telling the back end where stuff is
app.use(express.static('../client/dist'));
//json and urlencoded do body parsing for requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connects homepage to an html file
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
