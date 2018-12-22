const express = require ('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
.connect(db, {useNewUrlParser: true}) // Adding new mongo url parser
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.use('/api', routes);

//error handling
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, () => console.log('Server started..'));