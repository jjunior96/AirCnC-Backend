const express = require('express');
const routes = require('./routes');
// const Database = require('./database/index');
const mongoose = require ('mongoose');


const app = express();

mongoConnection = mongoose.connect(
  'mongodb://localhost:27017/semanaOmnistack',
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
);

// const bancoDeDados = Database;

app.use(express.json());
// app.use(bancoDeDados);
app.use(routes);

app.listen(3000);
