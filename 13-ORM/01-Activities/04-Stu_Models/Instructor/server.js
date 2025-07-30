const express = require('express');
const sequelize = require('./config/connection');

const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 3001;
const resetDB = process.env.RESET_DB === "true" || false;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: resetDB }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
